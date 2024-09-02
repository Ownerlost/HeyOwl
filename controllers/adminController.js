// controllers/adminController.js
const Exam = require('../models/Exam');
const Test = require('../models/Test');

// @desc    Upload new test series
// @route   POST /api/admin/upload/test-series
// @access  Private/Admin
exports.uploadTestSeries = async (req, res) => {
  const { examId, testSeries } = req.body;

  try {
    const exam = await Exam.findById(examId);

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    const test = new Test({
      exam: exam._id,
      title: testSeries.title,
      questions: testSeries.questions,
    });

    await test.save();
    res.status(201).json({ message: 'Test series uploaded successfully', test });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Upload previous year questions
// @route   POST /api/admin/upload/pyq
// @access  Private/Admin
exports.uploadPYQ = async (req, res) => {
  // Your implementation here
};

// @desc    Upload daily practice papers
// @route   POST /api/admin/upload/dpp
// @access  Private/Admin
exports.uploadDPP = async (req, res) => {
  // Your implementation here
};

// @desc    Manage exams (view, add, delete exams)
// @route   GET /api/admin/manage-exams
// @access  Private/Admin
exports.manageExams = async (req, res) => {
  // Your implementation here
};
