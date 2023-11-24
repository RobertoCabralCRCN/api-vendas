import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../repositories/interfaces/ProductsRepository.interface';
import Product from '../entities/Product';
import AppError from '@shared/errors/AppError';

@injectable()
export class GetByProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<Product | null> {
    const findProduct = await this.productsRepository.findById(id);

    if (!findProduct) {
      throw new AppError('Product not already exists!', 404);
    }

    return findProduct;
  }
}
