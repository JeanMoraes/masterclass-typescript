import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();


routes.get('/', (req, res) => {
    return res.send('Olá typescript respawn');
})

routes.get('/users', UserController.index);
routes.get('/users/add', UserController.create);

routes.post('/users', UserController.create);

export default routes;