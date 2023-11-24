import { IProductsRepository } from '@modules/products/repositories/interfaces/ProductsRepository.interface';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const data = await this.productsRepository.findById(id);

    if (!data) {
      throw new AppError('Product not already exist!');
    }

    await this.productsRepository.delete(data);

    return;
  }
}
