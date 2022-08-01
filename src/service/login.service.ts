import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import NewError from '../error/error';
import User from '../interfaces/user.interface';
import connection from '../models/connection';
import LoginModel from '../models/login.model';
import Token from '../types/token.type';
import AuthService from './auth.service';

class LoginService {
  public LoginModel: LoginModel;

  public AuthService: AuthService;

  constructor(
    model: LoginModel = new LoginModel(connection),
    authService: AuthService = new AuthService(),
  ) {
    this.LoginModel = model;
    this.AuthService = authService;
  }

  login = async ({ username, password }: User): Promise<Token | undefined> => {
    const user = await this.LoginModel.login(username, password);
    if (user.length > 0) {
      const token = this.AuthService.sign({ id: user[0].id, username });
      return { token };
    }
    const error: NewError = new NewError('Username or password invalid', StatusCodes.UNAUTHORIZED);
    
    throw error;
  };

  validateBody = (body: User): User => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const { error, value } = schema.validate(body);
    if (error) {
      const newErr: NewError = new NewError(error.message, StatusCodes.BAD_REQUEST);
      throw newErr;
    }
    return value;
  };
}

export default LoginService;