import { Router } from 'express';
import { productsRoutes } from '@shared/http/routes/products.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/products', productsRoutes);
routes.use('/users', usersRoutes);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev!' });
});

export default routes;
