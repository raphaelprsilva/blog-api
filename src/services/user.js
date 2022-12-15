const { User } = require('../database/models');
const { validateCreateUserSchema } = require('./validations/userValidation');

const create = async ({ email, displayName, password, image }) => {
  const userData = { email, displayName, password, image };
  const validationResult = validateCreateUserSchema(userData);

  if (validationResult.type) {
    return validationResult;
  }

  const user = await User.findOne({ where: { email } });

  if (user) {
    return {
      type: 'ALREADY_EXISTS',
      message: 'User already registered',
    };
  }

  await User.create({ email, displayName, password, image });

  return { type: null, message: '' };
};

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  return user;
};

module.exports = {
  create,
  getByEmail,
  getAll,
  getById,
};
