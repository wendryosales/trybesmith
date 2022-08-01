import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import Token from '../types/token.type';
import AuthService from './auth.service';

class UsersService {
  public UsersModel: UsersModel;

  public AuthService: AuthService;

  constructor(
    model: UsersModel = new UsersModel(connection),
    authService: AuthService = new AuthService(),
  ) {
    this.UsersModel = model;
    this.AuthService = authService;
  }

  post = async (user: User): Promise<Token> => {
    const { id, username } = user;
    const token = this.AuthService.sign({ id, username });
    this.UsersModel.post(user);
    return { token };
  };
}

export default UsersService;