// controllers/examController.js
const Exam = require('../models/Exam');

// @desc    Get exam details
// @route   GET /api/exam/:id
// @access  Public
exports.getExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.examId); // Match with route parameter name

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
