const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    enum: ['Daily', 'Weekly', 'Monthly'],
    default: 'Daily',
  },
  completedDates: [Date],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Habit', habitSchema);
