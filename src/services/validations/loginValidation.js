const { loginSchema } = require('./loginSchema');

const validateLoginSchema = (loginData) => {
  const { error } = loginSchema.validate(loginData);

  if (error) {
    const {
      details: [{ message }],
    } = error;

    return {
      type: 'invalid_data',
      message,
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateLoginSchema,
};
