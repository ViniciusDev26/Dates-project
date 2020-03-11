import { Router } from 'express';
import AcontecimentoController from './controllers/AcontecimentoController';

const routes = Router();

routes.get('/indexAcontecimento', AcontecimentoController.index);
routes.post('/storeAcontecimento', AcontecimentoController.store);

export default routes;