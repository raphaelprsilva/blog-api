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

    return res.status(200).json({ token: message });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
