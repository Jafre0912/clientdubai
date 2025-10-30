// --- (UPDATED FILE) ---
// Humne controller file ka use kiya hai
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getVacancies, createVacancy } = require('../controllers/vacancyController');

// @route   GET api/vacancies
// @desc    Get all vacancies
// @access  Public
router.get('/', getVacancies);

// @route   POST api/vacancies
// @desc    Create a new vacancy
// @access  Private (SECURED)
router.post('/', protect, createVacancy);

module.exports = router;
