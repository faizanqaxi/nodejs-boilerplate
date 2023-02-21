import { Router } from 'express';
import authRoutes from './auth';

const router = Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * ALL v1/auth
 */
router.use('/auth', authRoutes);

export default router;
