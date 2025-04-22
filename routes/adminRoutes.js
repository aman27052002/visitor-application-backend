import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { roleMiddleware } from '../middlewares/roleMiddleware.js';
import { createMember, getMembers, updateMember, deleteMember } from '../controllers/memberController.js';
import { getVisitors } from '../controllers/visitorController.js';

const router = express.Router();

router.use(protect, roleMiddleware('admin'));

router.post('/members', createMember);
router.get('/members', getMembers);
router.put('/members/:id', updateMember);
router.delete('/members/:id', deleteMember);

router.get('/visitors', getVisitors);

export default router;
