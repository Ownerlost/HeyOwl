const express = require('express');
const router = express.Router();
const { submitTest, getResults, getAllTests } = require('../controllers/testController'); // Ensure all functions are imported
const auth = require('../config/auth');

// @route   GET /test/all
// @desc    Get all tests
// @access  Public
router.get('/all', getAllTests);

// @route   POST /test/:id
// @desc    Submit a specific test
// @access  Private
router.post('/:id', auth, submitTest);

// @route   GET /test/results
// @desc    Get user's test results
// @access  Private
router.get('/results', auth, getResults);

module.exports = router;
