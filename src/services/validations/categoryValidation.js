const { categorySchema } = require('./categorySchema');

const validateCategory = (categoryData) => {
  const { error } = categorySchema.validate(categoryData);

  if (error) {
    return {
      type: 'BAD_REQUEST',
      message: error.details[0].message,
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateCategory,
};
