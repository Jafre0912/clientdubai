// --- Logic for Vacancy Routes ---
const Vacancy = require('../models/Vacancy');

// @desc    Get all vacancies
// @access  Public
exports.getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find().sort({ createdAt: -1 });
    res.json(vacancies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new vacancy
// @access  Private (Admin)
exports.createVacancy = async (req, res) => {
  try {
    const newVacancy = new Vacancy({
      location: req.body.location,
      state: req.body.state,
      district: req.body.district,
      type: req.body.type || 'Full-time',
      status: 'Available',
    });
    const vacancy = await newVacancy.save();
    res.status(201).json(vacancy);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
