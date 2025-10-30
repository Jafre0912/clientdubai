// --- Server/routes/applications.js ---
// This file controls who can access the application data.

const express = require('express');
const router = express.Router();
const {
  getApplications,
  createApplication,
  deleteApplication,
  updateApplicationStatus,
} = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware'); // Admin protection
const upload = require('../middleware/uploadMiddleware'); // For photo uploads

// --- Public Route ---
// POST /api/applications
// (This is the route for users to submit the form)
router.post('/', upload.single('photo'), createApplication);

// --- Admin-Only (Protected) Routes ---

// GET /api/applications
// (This gets all applications for the admin dashboard)
router.get('/', protect, getApplications);

// DELETE /api/applications/:id
// (This lets the admin delete an application)
router.delete('/:id', protect, deleteApplication);

// PUT /api/applications/:id/status
// (This lets the admin approve/reject an application)
router.put('/:id/status', protect, updateApplicationStatus);

module.exports = router;
