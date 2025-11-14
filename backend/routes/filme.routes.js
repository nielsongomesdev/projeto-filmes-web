import { Router } from 'express';
import filmeController from '../controller/filme.controller.js';
import filmeMiddleware from '../middlewares/filme.middleware.js';

const router = Router(); 

router.get('/filmes', filmeController.findAll);

router.get('/filmes/:id', filmeMiddleware.validarIdFilme, filmeController.findById);

router.post('/filmes', filmeMiddleware.validarDadosFilme, filmeController.create);

router.put('/filmes/:id', filmeMiddleware.validarIdFilme, filmeMiddleware.validarDadosFilme, filmeController.update);

router.delete('/filmes/:id', filmeMiddleware.validarIdFilme, filmeController.remove);

export default router;
