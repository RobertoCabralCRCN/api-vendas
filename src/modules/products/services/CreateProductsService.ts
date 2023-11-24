import { inject, injectable } from 'tsyringe';
import {
  ICreateProductsDTO,
  IProductsRepository,
} from '@modules/products/repositories/interfaces/ProductsRepository.interface';
import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';

@injectable()
export class CreateProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(data: ICreateProductsDTO): Promise<Product | null> {
    const product = new Product();
    Object.assign(product, { ...data });
    const productsExists = await this.productsRepository.findByName(data.name);

    if (productsExists) {
      throw new AppError('Product already exist!');
    }

    const cretedProduct = await this.productsRepository.create(product);

    return cretedProduct;
  }
}
