import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Changed username to name
  email: { type: String, required: true, unique: true },  // Added email
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'gatekeeper'], required: true },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
