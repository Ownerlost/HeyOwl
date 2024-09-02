const express = require('express');
const router = express.Router();
const { getNotifications, markAsRead } = require('../controllers/notificationController'); // Ensure the correct import path
const auth = require('../config/auth');

// @route   GET /notification
// @desc    Get all notifications for the logged-in user
// @access  Private
router.get('/', auth, getNotifications);

// @route   PUT /notification/:id/read
// @desc    Mark a notification as read
// @access  Private
router.put('/:id/read', auth, markAsRead);

module.exports = router;
