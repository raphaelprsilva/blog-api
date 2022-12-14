const { userSchema } = require('./userSchema');

const validateCreateUserSchema = (userData) => {
  const { error } = userSchema.validate(userData);

  if (error) {
    return {
      type: 'BAD_REQUEST',
      message: error.details[0].message,
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateCreateUserSchema,
};
