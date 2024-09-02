// routes/user.js
const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/userController');
const auth = require('../config/auth');

// @route   GET /user/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', auth, getProfile);

// @route   PUT /user/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, updateProfile);

module.exports = router;
