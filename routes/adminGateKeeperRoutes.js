// routes/adminGatekeeperRoutes.js

import express from 'express';
import User from '../models/User.js'; 

const router = express.Router();

// Route to get all admin and gatekeeper details
router.get('/', async (req, res) => {
  try {
    const user = await User.find(); 

    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching admin and gatekeeper details:', err);
    res.status(500).json({ message: 'Failed to fetch details' });
  }
});

export default router;
