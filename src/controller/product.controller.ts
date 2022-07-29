import { Request, Response } from 'express';
import { CREATED } from 'http-status-codes';
import ProductService from '../service/product.service';

class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  public async post(req: Request, res: Response): Promise<Response> {
    const product = req.body;
    const rows = await this.service.post(product);
    return res.status(CREATED).json({ id: rows.insertId, ...product });
  }
}

export default ProductController;