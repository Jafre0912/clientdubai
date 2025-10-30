// --- CONVERTED TO COMMONJS ---

const express = require('express'); // Use require
const router = express.Router();
const { loginAdmin, registerAdmin } = require('../controllers/adminController.js'); // Use require
// const { protect } = require('../middleware/authMiddleware.js'); // Not used yet

// @route   POST /api/admin/login
// @desc    Authenticate admin and get token
// @access  Public
router.post('/login', loginAdmin);

// @route   POST /api/admin/register
// @desc    Register a new admin (FOR DEV/SETUP ONLY)
// @access  Public (or make it Private/Protected later)
router.post('/register', registerAdmin);

module.exports = router; // Use module.exports

