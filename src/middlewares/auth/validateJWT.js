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
    const { data: user } = decoded;

    const userData = userService.getById(user.id);

    if (!userData) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = userData;

    next();
  } catch (err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;
