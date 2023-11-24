import { ProductsRepository } from '@modules/products/repositories/implementations/ProductsRepository';
import { IProductsRepository } from '@modules/products/repositories/interfaces/ProductsRepository.interface';
import { UsersRepository } from '@modules/users/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/interfaces/UsersRepository.interface';
import { container } from 'tsyringe';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
