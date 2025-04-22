import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { roleMiddleware } from '../middlewares/roleMiddleware.js';
import { addVisitor, getVisitors } from '../controllers/visitorController.js';

const router = express.Router();

router.use(protect, roleMiddleware('gatekeeper'));

router.post('/visitors', addVisitor);
router.get('/visitors', getVisitors);

export default router;
