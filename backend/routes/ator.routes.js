import { Router } from 'express';
import atorController from '../controller/ator.controller.js';
import atorMiddleware from '../middlewares/ator.middleware.js';

const router = Router();

router.get('/atores', atorController.findAll);

router.get('/atores/:id', atorMiddleware.validarIdAtor, atorController.findById);

router.post('/atores', atorMiddleware.validarDadosAtor, atorController.create);

router.put('/atores/:id', atorMiddleware.validarIdAtor, atorMiddleware.validarDadosAtor, atorController.update);

router.delete('/atores/:id', atorMiddleware.validarIdAtor, atorController.remove);

export default router;
