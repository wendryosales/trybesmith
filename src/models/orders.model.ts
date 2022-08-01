import { Pool } from 'mysql2/promise';
import OrdersList from '../interfaces/orders.interface';

class OrdersModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  getAll = async (): Promise<[OrdersList]> => {
    const sql = ` SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds 
                  FROM Trybesmith.Orders AS orders
                  LEFT JOIN Trybesmith.Products AS products
                  ON orders.id = products.orderId
                  GROUP BY orders.id
                  ORDER BY orders.userId;`;
    const [rows] = await this.connection.query(sql);
    
    return rows as unknown as [OrdersList];
  };
}

export default OrdersModel;