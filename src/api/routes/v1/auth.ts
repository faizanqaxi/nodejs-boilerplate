import { Router } from 'express';
import authController from '../../controllers/auth';

const router = Router();

/**
 * POST v1/auth/login
 */
router.post('/login', authController.login);

export default router;
