import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { createError } from '../utils/customError.js';

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      next(createError(401, 'Not authorized, token failed'));
    }
  } else {
    next(createError(401, 'Not authorized, no token'));
  }
};
