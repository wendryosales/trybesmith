import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../service/product.service';

class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  public async post(req: Request, res: Response): Promise<Response> {
    const product = req.body;
    const rows = await this.service.post(product);
    return res.status(StatusCodes.CREATED).json({ id: rows.insertId, ...product });
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  }
}

export default ProductController;