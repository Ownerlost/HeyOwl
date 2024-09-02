const Notification = require('../models/Notification');
const sendEmail = require('../config/notifications');

// @desc    Send notification to users
// @route   POST /api/notifications/send
// @access  Private/Admin
exports.sendNotification = async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    await sendEmail({ email, subject, message });
    const notification = new Notification({ email, subject, message });
    await notification.save();

    res.status(201).json({ message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get notifications for a user
// @route   GET /api/notifications
// @access  Private
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ email: req.user.email });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark a notification as read
// @route   PUT /api/notifications/:id/read
// @access  Private
exports.markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    notification.isRead = true;
    await notification.save();

    res.json({ message: 'Notification marked as read', notification });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
