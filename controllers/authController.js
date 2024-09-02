const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// @desc    Register new user
// @route   POST /auth/register
// @access  Public
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      req.flash('error_msg', 'User already exists');
      return res.redirect('/auth/register');
    }

    const user = new User({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    await user.save();

    req.flash('success_msg', 'User registered successfully');
    res.redirect('/auth/login');
  } catch (error) {
    req.flash('error_msg', error.message);
    res.redirect('/auth/register');
  }
};

// @desc    Authenticate user and get token
// @route   POST /auth/login
// @access  Public
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      req.flash('error_msg', 'Invalid email or password');
      return res.redirect('/auth/login');
    }

    req.login(user, (err) => {
      if (err) return next(err);
      req.flash('success_msg', 'Login successful');
      res.redirect('/');
    });
  } catch (error) {
    req.flash('error_msg', error.message);
    res.redirect('/auth/login');
  }
};
