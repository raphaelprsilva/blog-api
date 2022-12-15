const { postSchema } = require('./postSchema');

const validatePostSchema = (postData) => {
  const { error } = postSchema.validate(postData);
  console.log('🚀 ~ postValidation.js:5 ~ error =', error);

  if (error) {
    return {
      type: 'BAD_REQUEST',
      message: error.details[0].message,
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validatePostSchema,
};
