const jwt = require('jsonwebtoken');

require('dotenv').config();

const { userService } = require('../services');
const { mapError } = require('../utils/errorMap');

const create = async (req, res) => {
  try {
    const { email, displayName, password, image } = req.body;
    const userData = { email, displayName, password, image };
    const { type, message } = await userService.create(userData);

    if (type) {
      return res.status(mapError(type)).json({ message });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();

    return res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  create,
  getAll,
};
