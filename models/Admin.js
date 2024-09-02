// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  permissions: {
    type: [String],
    default: ['manageExams', 'manageUsers', 'uploadContent'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Admin', adminSchema);
