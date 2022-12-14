const { User } = require('../database/models');
const { validateLoginSchema } = require('./validations/loginValidation');

const login = async (email, password) => {
  const validationResult = validateLoginSchema({ email, password });

  if (validationResult.type) {
    return validationResult;
  }

  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return {
      type: 'invalid_data',
      message: 'Invalid fields',
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  login,
};
