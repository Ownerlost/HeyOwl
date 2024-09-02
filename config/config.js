// config/config.js
module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
  jwtExpire: process.env.JWT_EXPIRE || '30d',
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};
