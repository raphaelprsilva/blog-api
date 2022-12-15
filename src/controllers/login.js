const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginService = require('../services/login');
const { mapError } = require('../utils/errorMap');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { type, message } = await loginService.login({ email, password });

    if (type) {
      return res.status(mapError(type)).json({ message });
    }

    const payload = {
      email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
