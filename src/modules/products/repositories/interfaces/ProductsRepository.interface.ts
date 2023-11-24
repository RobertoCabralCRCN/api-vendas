import Product from '@modules/products/entities/Product';
import { IBaseRepository } from '@shared/BaseRepository/BaseRepository.interface';

interface ICreateProductsDTO {
  name: string;
  price: number;
  quantity: number;
}
interface IUpdateProductsDTO {
  id?: string;
  name: string;
  price: number;
  quantity: number;
}

interface IProductsRepository extends IBaseRepository<Product> {
  findByName(name: string): Promise<Product | null>;
}

export { IProductsRepository, ICreateProductsDTO, IUpdateProductsDTO };
