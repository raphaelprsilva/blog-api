const { StatusCodes, ReasonPhrases } = require('http-status-codes');
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

    return res.status(201).json({ token: message });
  } catch (err) {
    console.error(err.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();

    return res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.getById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
