import { Router } from 'express';
import filmeController from '../controller/filme.controller.js';

const router = Router();

router.get('/filmes', filmeController.findAll);

export default router;
