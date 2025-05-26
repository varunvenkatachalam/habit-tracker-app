const Habit = require('../models/habit');

// @desc    Get all habits
// @route   GET /api/habits
exports.getHabits = async (req, res, next) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    next(error);
  }
};

// @desc    Create new habit
// @route   POST /api/habits
exports.createHabit = async (req, res, next) => {
  try {
    const newHabit = await Habit.create(req.body);
    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
};
