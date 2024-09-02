// routes/admin.js
const express = require('express');
const router = express.Router();
const { uploadTestSeries, uploadPYQ, uploadDPP, manageExams } = require('../controllers/adminController');
const auth = require('../config/auth');

// @route   POST /admin/upload-test-series
// @desc    Upload new test series
// @access  Private/Admin
router.post('/upload-test-series', auth, uploadTestSeries);

// @route   POST /admin/upload-pyq
// @desc    Upload previous year questions
// @access  Private/Admin
router.post('/upload-pyq', auth, uploadPYQ);

// @route   POST /admin/upload-dpp
// @desc    Upload daily practice papers
// @access  Private/Admin
router.post('/upload-dpp', auth, uploadDPP);

// @route   GET /admin/manage-exams
// @desc    Manage exams (view, add, delete exams)
// @access  Private/Admin
router.get('/manage-exams', auth, manageExams);

module.exports = router;
