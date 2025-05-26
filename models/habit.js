const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a habit name'],
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly'],
    default: 'daily',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Habit', habitSchema);
