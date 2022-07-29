import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

class ProductService {
  public ProductModel: ProductModel;

  constructor(model: ProductModel = new ProductModel(connection)) {
    this.ProductModel = model;
  }

  post = async (product: Product): Promise<Product> => this.ProductModel.post(product);
}

export default ProductService;