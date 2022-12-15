const { User } = require('../database/models');
const { validateLoginSchema } = require('./validations/loginValidation');
const jwtUtil = require('../utils/jwt.util');

const login = async ({ email, password }) => {
  const validationResult = validateLoginSchema({ email, password });

  if (validationResult.type) {
    return validationResult;
  }

  const user = await User.findOne({ where: { email, password } });

  if (!user || user.password !== password) {
    return {
      type: 'BAD_REQUEST',
      message: 'Invalid fields',
    };
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = jwtUtil.createToken(userWithoutPassword);

  return { type: null, message: token };
};

module.exports = {
  login,
};
