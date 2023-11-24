import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../repositories/interfaces/ProductsRepository.interface';
import Product from '../entities/Product';

@injectable()
export class ListProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(): Promise<Product[] | null> {
    const list = await this.productsRepository.getAll();

    return list;
  }
}
