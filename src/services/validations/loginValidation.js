const { loginSchema } = require('./loginSchema');

const validateLoginSchema = (loginData) => {
  const { error } = loginSchema.validate(loginData);
  console.log('🚀 ~ loginValidation.js:5 ~ error =', error);

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
