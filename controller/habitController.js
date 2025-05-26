const Habit = require('../models/habit');

// GET all habits
exports.getHabits = async (req, res) => {
  const habits = await Habit.find();
  res.status(200).json(habits);
};

// POST a new habit
exports.createHabit = async (req, res) => {
  const { title, frequency } = req.body;
  const habit = new Habit({ title, frequency });
  await habit.save();
  res.status(201).json(habit);
};

// DELETE a habit
exports.deleteHabit = async (req, res) => {
  const { id } = req.params;
  await Habit.findByIdAndDelete(id);
  res.status(204).send();
};
