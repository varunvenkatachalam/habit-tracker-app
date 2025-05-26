const express = require('express');
const router = express.Router();
const { getHabits, createHabit } = require('../controller/habitController');

router.get('/', getHabits);
router.post('/', createHabit);

module.exports = router;
