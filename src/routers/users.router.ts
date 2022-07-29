import { Router } from 'express';
import UsersController from '../controller/users.controller';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', (req, res) => usersController.post(req, res));

export default usersRouter;