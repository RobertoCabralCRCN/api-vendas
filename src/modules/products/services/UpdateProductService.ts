import Product from '@modules/products/entities/Product';
import {
  IProductsRepository,
  IUpdateProductsDTO,
} from '@modules/products/repositories/interfaces/ProductsRepository.interface';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(data: IUpdateProductsDTO): Promise<Product | null> {
    const productsExists = await this.productsRepository.findById(data.id);

    if (!productsExists) {
      throw new AppError('Product not already exist!');
    }

    const productsExist = await this.productsRepository.findByName(data.name);

    const updatedProduct = await this.productsRepository.update({
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: data.quantity,
    });

    if (productsExist && data.name !== updatedProduct?.name) {
      throw new AppError('Product already exist!');
    }

    Object.assign(data, {
      ...updatedProduct,
    });

    return updatedProduct;
  }
}
