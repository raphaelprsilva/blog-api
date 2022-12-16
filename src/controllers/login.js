require('dotenv').config();

const { StatusCodes, ReasonPhrases } = require('http-status-codes');

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
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};
