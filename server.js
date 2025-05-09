import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import gatekeeperRoutes from './routes/gateKeeperRoutes.js';
import adminGatekeeperRoutes from './routes/adminGateKeeperRoutes.js'; // New Route
import { notFound, errorHandler } from './utils/customError.js';

dotenv.config();
const app = express();

connectDB();

const corsOptions = {
  origin: 'https://visitor-application.vercel.app', // Set to the correct origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/gatekeeper', gatekeeperRoutes);
app.use('/api/admin/all-admin-gatekeepers', adminGatekeeperRoutes); // Use the new route

// Error Handlers
app.use(notFound);
app.use(errorHandler);
app.get("/",(req,res)=>{
  return res.status(200).json({message:"home page"})
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
