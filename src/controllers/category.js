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
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  create,
};
