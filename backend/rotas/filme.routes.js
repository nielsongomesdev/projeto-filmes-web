import { Router } from 'express';
import filmeController from '../controller/filme.controller.js';
import filmeMiddleware from '../middlewares/filme.middleware.js';

const router = Router(); 

router.get('/filmes', filmeController.findAll);

router.get('/filmes/:id', filmeController.findById);

router.post('/filmes', filmeMiddleware.validarDadosFilme, filmeController.create);

router.put('/filmes/:id', filmeMiddleware.validarDadosFilme, filmeController.update);

router.delete('/filmes/:id', filmeController.remove);

export default router
