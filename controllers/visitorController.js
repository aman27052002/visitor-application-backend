import Visitor from '../models/Visitor.js';

export const addVisitor = async (req, res, next) => {
  try {
    const { name, address, whomToMeet, phone, date, time } = req.body;``
    const visitor = await Visitor.create({ name, address, whomToMeet, phone, date, time });

    res.status(201).json(visitor);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getVisitors = async (req, res, next) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
