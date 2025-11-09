import { Router } from 'express';
import filmeController from '../controller/filme.controller.js';

const router = Router(); 

router.get('/filmes', filmeController.findAll);
router.get('/filmes/:id', filmeController.findById);
router.post('/filmes', filmeController.create);
router.put('/filmes/:id', filmeController.update);
router.delete('/filmes/:id', filmeController.remove);

export default router;
