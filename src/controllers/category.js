const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const { categoryService } = require('../services');
const { mapError } = require('../utils/errorMap');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const { type, message } = await categoryService.create({ name });

    if (type) {
      return res.status(mapError(type)).json({ message });
    }

    return res.status(201).json(message);
  } catch (err) {
    console.error(err.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const getAll = async (req, res) => {
  try {
    const { type, message } = await categoryService.getAll();

    if (type) {
      return res.status(mapError(type)).json({ message });
    }

    return res.status(200).json(message);
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
};
