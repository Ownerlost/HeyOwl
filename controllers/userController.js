// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Ensure bcrypt is required if used

// @desc    Get user profile
// @route   GET /user/profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /user/profile
// @access  Private
exports.updateProfile = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      if (password) {
        user.password = bcrypt.hashSync(password, 10);
      }

      const updatedUser = await user.save();
      res.json({
        message: 'Profile updated successfully',
        user: updatedUser,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
