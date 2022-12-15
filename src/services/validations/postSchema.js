const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'Some required fields are missing',
  }),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

module.exports = {
  postSchema,
};
