import { Router } from 'express';
import atorController from '../controller/ator.controller.js';

const router = Router();

router.get('/atores', atorController.findAll);
router.post('/atores', atorController.create);

export default router;
