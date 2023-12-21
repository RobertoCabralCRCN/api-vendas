import { Router } from 'express';


import { CreateSessionsController } from '@modules/users/controllers/CreateSessionsController';

const sessionsRoutes = Router();

sessionsRoutes.post('/', CreateSessionsController.handler);
// usersRoutes.get('/:id', GetByUserController.handler);
// usersRoutes.get('/', ListUsersController.handler);
// usersRoutes.delete('/:id', DeleteUserController.handler);
// usersRoutes.put('/:id', UpdateUserController.handler);

export { sessionsRoutes };
