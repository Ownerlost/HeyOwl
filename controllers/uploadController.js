// controllers/uploadController.js
const Exam = require('../models/Exam');
const Test = require('../models/Test');
const fs = require('fs');
const path = require('path');

// @desc    Upload Test Series
// @route   POST /api/admin/upload/test-series
// @access  Private/Admin
exports.uploadTestSeries = async (req, res) => {
  try {
    const { examId } = req.body;
    const filePath = path.join(__dirname, '../uploads/', req.file.filename);

    // Load the JSON file
    const testSeriesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Create and save test series
    const test = new Test({
      exam: examId,
      title: testSeriesData.title,
      questions: testSeriesData.questions,
    });

    await test.save();

    // Remove the uploaded file
    fs.unlinkSync(filePath);

    res.status(201).json({ message: 'Test series uploaded successfully', test });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Upload PYQs
// @route   POST /api/admin/upload/pyq
// @access  Private/Admin
exports.uploadPYQs = async (req, res) => {
  try {
    const { examId } = req.body;
    const filePath = path.join(__dirname, '../uploads/', req.file.filename);

    // Load the JSON file
    const pyqData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Create and save PYQs
    const test = new Test({
      exam: examId,
      title: pyqData.title,
      questions: pyqData.questions,
    });

    await test.save();

    // Remove the uploaded file
    fs.unlinkSync(filePath);

    res.status(201).json({ message: 'PYQs uploaded successfully', test });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Upload DPPs
// @route   POST /api/admin/upload/dpp
// @access  Private/Admin
exports.uploadDPPs = async (req, res) => {
  try {
    const { examId } = req.body;
    const filePath = path.join(__dirname, '../uploads/', req.file.filename);

    // Load the JSON file
    const dppData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Create and save DPPs
    const test = new Test({
      exam: examId,
      title: dppData.title,
      questions: dppData.questions,
    });

    await test.save();

    // Remove the uploaded file
    fs.unlinkSync(filePath);

    res.status(201).json({ message: 'DPPs uploaded successfully', test });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
