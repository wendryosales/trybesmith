import { Router } from 'express';
import ProductController from '../controller/product.controller';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', (req, res) => productController.post(req, res));

export default productRouter;