import { Router } from 'express';

import { CreateUsersController } from '@modules/users/controllers/CreateUsersController';
import { GetByUserController } from '@modules/users/controllers/GetByUserController';
import { ListUsersController } from '@modules/users/controllers/ListUsersController';
import { DeleteUserController } from '@modules/users/controllers/DeleteUserController';
import { UpdateUserController } from '@modules/users/controllers/UpdateUserController';
import isAuthenticated from '@modules/users/middlewares/isAuthenticated';

const usersRoutes = Router();

usersRoutes.post('/', CreateUsersController.handler);
usersRoutes.get('/:id', isAuthenticated, GetByUserController.handler);
usersRoutes.get('/', isAuthenticated, ListUsersController.handler);
usersRoutes.delete('/:id', isAuthenticated, DeleteUserController.handler);
usersRoutes.put('/:id', isAuthenticated, UpdateUserController.handler);

export { usersRoutes };
