import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../service/login.service';

class LoginController {
  public loginService: LoginService;

  constructor(loginService: LoginService = new LoginService()) {
    this.loginService = loginService;
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const loginInfos = await this.loginService.validateBody(req.body);
    const token = await this.loginService.login(loginInfos);
    return res.status(StatusCodes.OK).json(token);
  }
}

export default LoginController;