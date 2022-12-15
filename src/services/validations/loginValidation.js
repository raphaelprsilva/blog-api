const { loginSchema } = require('./loginSchema');

const validateLoginSchema = (loginData) => {
  const { error } = loginSchema.validate(loginData);

  if (error) {
    const {
      details: [{ message }],
    } = error;

    return {
      type: 'BAD_REQUEST',
      message,
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateLoginSchema,
};
