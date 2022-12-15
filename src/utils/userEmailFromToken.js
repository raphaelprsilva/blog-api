require('dotenv').config();

const jwt = require('jsonwebtoken');

const getUserEmail = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { email } = decoded;
  return email;
};

module.exports = {
  getUserEmail,
};
