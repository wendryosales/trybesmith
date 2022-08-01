import OrdersList from '../interfaces/orders.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  public OrdersModel: OrdersModel;

  constructor(
    model: OrdersModel = new OrdersModel(connection),
  ) {
    this.OrdersModel = model;
  }

  getAll = async (): Promise<[OrdersList]> => {
    const list = this.OrdersModel.getAll();
    return list;
  };
}

export default OrdersService;