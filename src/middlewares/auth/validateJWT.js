const jwt = require('jsonwebtoken');
const { userService } = require('../../services');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = userService.getByEmail(decoded.email);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;
