const { updatePostSchema } = require('./updatePostSchema');

const validateUpdatePostSchema = (postData) => {
  const { error } = updatePostSchema.validate(postData);

  if (error) {
    return {
      type: 'BAD_REQUEST',
      message: error.details[0].message,
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateUpdatePostSchema,
};
