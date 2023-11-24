import { Router } from 'express';
import { CreateProductsController } from '@modules/products/controllers/CreateProductsController';
import { GetByProductController } from '@modules/products/controllers/GetByProductController';
import { ListProductsController } from '@modules/products/controllers/ListProductsController';
import { DeleteProductController } from '@modules/products/controllers/DeleteProductController';
import { UpdateProductController } from '@modules/products/controllers/UpdateProductController';

const productsRoutes = Router();

const createProductsController = new CreateProductsController();

productsRoutes.post('/', createProductsController.handler);
productsRoutes.get('/:id', GetByProductController.handler);
productsRoutes.get('/', ListProductsController.handler);
productsRoutes.delete('/:id', DeleteProductController.handler);
productsRoutes.put('/:id', UpdateProductController.handler);

export { productsRoutes };
