const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to display the login page
router.get('/login', (req, res) => {
  res.render('auth/login');
});

// Route to handle login form submission
router.post('/login', authController.login);

// Route to display the registration page
router.get('/register', (req, res) => {
  res.render('auth/register');
});

// Route to handle registration form submission
router.post('/register', authController.register);

// Route to handle logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/auth/login');
});

module.exports = router;
