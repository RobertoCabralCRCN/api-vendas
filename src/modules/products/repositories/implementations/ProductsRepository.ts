import { BaseRepository } from '@shared/BaseRepository/BaseRepository';
import { IProductsRepository } from '../interfaces/ProductsRepository.interface';
import Product from '@modules/products/entities/Product';

class ProductsRepository
  extends BaseRepository<Product>
  implements IProductsRepository
{
  constructor() {
    super(Product, 'id');
  }
  async findByName(name: string): Promise<Product | null> {
    const finded = await this.repository.findOneBy({ name });

    return finded;
  }
}

export { ProductsRepository };
