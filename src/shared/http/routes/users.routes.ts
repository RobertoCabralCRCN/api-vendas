import { Router } from 'express';

import { CreateUsersController } from '@modules/users/controllers/CreateUsersController';
import { GetByUserController } from '@modules/users/controllers/GetByUserController';
import { ListUsersController } from '@modules/users/controllers/ListUsersController';
import { DeleteUserController } from '@modules/users/controllers/DeleteUserController';
import { UpdateUserController } from '@modules/users/controllers/UpdateUserController';

const usersRoutes = Router();

usersRoutes.post('/', CreateUsersController.handler);
usersRoutes.get('/:id', GetByUserController.handler);
usersRoutes.get('/', ListUsersController.handler);
usersRoutes.delete('/:id', DeleteUserController.handler);
usersRoutes.put('/:id', UpdateUserController.handler);

export { usersRoutes };
