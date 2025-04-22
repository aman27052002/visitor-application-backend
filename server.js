import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import gatekeeperRoutes from './routes/gatekeeperRoutes.js';
import adminGatekeeperRoutes from './routes/adminGatekeeperRoutes.js'; // New Route
import { notFound, errorHandler } from './utils/customError.js';

dotenv.config();
const app = express();

connectDB();

app.use(cors({ origin: "https://visitor-application.vercel.app/" }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/gatekeeper', gatekeeperRoutes);
app.use('/api/admin/all-admin-gatekeepers', adminGatekeeperRoutes); // Use the new route

// Error Handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
