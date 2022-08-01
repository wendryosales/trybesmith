import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../service/user.service';

class UsersController {
  public userService: UsersService;

  constructor(userService: UsersService = new UsersService()) {
    this.userService = userService;
  }

  public async post(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const token = await this.userService.post(user);
    return res.status(StatusCodes.CREATED).json(token);
  }
}

export default UsersController;