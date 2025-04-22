import Member from '../models/Member.js';
import { createError } from '../utils/customError.js';

export const createMember = async (req, res, next) => {
  try {
    const { name, address, phone, memberId, cars } = req.body;

    if (cars.length === 0) throw createError(400, 'No car provided');
    if (cars.length > 4) throw createError(400, 'Max 4 cars allowed');

    const member = await Member.create({ name, address, phone, memberId, cars });

    res.status(201).json(member);
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export const getMembers = async (req, res, next) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export const updateMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await Member.findByIdAndUpdate(id, req.body, { new: true });

    if (!member) return next(createError(404, 'Member not found'));

    res.json(member);
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export const deleteMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await Member.findByIdAndDelete(id);

    if (!member) return next(createError(404, 'Member not found'));

    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    console.log(error)
    next(error);
  }
};
