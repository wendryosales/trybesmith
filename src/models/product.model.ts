import { Pool } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

class ProductModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  post = async (values: Product): Promise<Product> => {
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [rows] = await this.connection.query(sql, [values.name, values.amount]);
    return rows as unknown as Product;
  };

  getAll = async (): Promise<Product[]> => {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [rows] = await this.connection.query(sql);
    return rows as unknown as Product[];
  };
}

export default ProductModel;