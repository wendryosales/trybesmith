import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../service/orders.service';

class OrdersController {
  public ordersService: OrdersService;

  constructor(ordersService: OrdersService = new OrdersService()) {
    this.ordersService = ordersService;
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const list = await this.ordersService.getAll();
    return res.status(StatusCodes.OK).json(list);
  }
}

export default OrdersController;