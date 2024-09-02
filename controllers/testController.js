const Test = require('../models/Test');
const Result = require('../models/Result');

// @desc    Get all tests
// @route   GET /api/test/all
// @access  Public
exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Submit test and save result
// @route   POST /api/test/:id
// @access  Private
exports.submitTest = async (req, res) => {
  const { answers } = req.body;

  try {
    const test = await Test.findById(req.params.id);

    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    const result = new Result({
      user: req.user.id,
      test: test._id,
      answers,
      score: calculateScore(test.questions, answers),
    });

    await result.save();
    res.status(201).json({ message: 'Test submitted successfully', result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get test results for a user
// @route   GET /api/test/results
// @access  Private
exports.getResults = async (req, res) => {
  try {
    const results = await Result.find({ user: req.user.id }).populate('test', 'title');
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const calculateScore = (questions, answers) => {
  let score = 0;
  questions.forEach((question, index) => {
    if (question.correctAnswer === answers[index]) {
      score += 1;
    }
  });
  return score;
};
