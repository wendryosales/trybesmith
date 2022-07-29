import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../service/user.service';

class UsersController {
  public service: UsersService;

  constructor(service: UsersService = new UsersService()) {
    this.service = service;
  }

  public async post(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const { insertId } = await this.service.post(user);
    return res.status(StatusCodes.CREATED).json({ id: insertId, ...user });
  }
}

export default UsersController;