const { User } = require('../database/models');
const { validateCreateUserSchema } = require('./validations/userValidation');

const create = async ({ email, displayName, password, image }) => {
  const validationResult = validateCreateUserSchema({
    email,
    displayName,
    password,
    image,
  });

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

module.exports = {
  create,
  getByEmail,
  getAll,
};
