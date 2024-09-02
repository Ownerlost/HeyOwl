// routes/exam.js
const express = require('express');
const router = express.Router();
const { getExam } = require('../controllers/examController'); // Change to getExam

// @route   GET /exam/:examId
// @desc    Get details of a specific exam
// @access  Public
router.get('/:examId', getExam);

module.exports = router;
