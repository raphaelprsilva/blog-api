const { Category } = require('../database/models');
const { validateCategory } = require('./validations/categoryValidation');

const create = async (categoryData) => {
  const validationResult = validateCategory(categoryData);

  if (validationResult.type) {
    return validationResult;
  }

  const categoryExists = await Category.findOne({
    where: { name: categoryData.name },
  });

  if (categoryExists) {
    return {
      type: 'ALREADY_EXISTS',
      message: 'Category already registered',
    };
  }
  const category = await Category.create({ name: categoryData.name });

  return { type: null, message: category.dataValues };
};

const getAll = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

module.exports = {
  create,
  getAll,
};
