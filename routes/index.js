// routes/index.js
const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/test', require('./test'));
router.use('/admin', require('./admin'));
router.use('/exam', require('./exam'));
router.use('/notification', require('./notification'));

module.exports = router;
