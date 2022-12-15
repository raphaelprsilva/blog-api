/* eslint-disable max-lines-per-function */
const Sequelize = require('sequelize');
const config = require('../database/config/config');

const {
  BlogPost,
  Category,
  User,
  PostCategory,
} = require('../database/models');
const { validatePostSchema } = require('./validations/postValidation');
const { validateUpdatePostSchema } = require('./validations/updatePostValidation');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createPost = async ({ title, content, categoryIds, userEmail }) => {
  const t = await sequelize.transaction();
  try {
    const postData = { title, content, categoryIds };
    const validationResult = validatePostSchema(postData);

    if (validationResult.type) return validationResult;

    const userData = await User.findOne({ where: { email: userEmail } });
    const { id } = userData.dataValues;
    const newBlogPost = await BlogPost.create({ userId: id, title, content }, { transaction: t });
    const postCategoriesIds = categoryIds.map(async (categoryId) =>
      Category.findOne({ where: { id: categoryId }, transaction: t }));
    const categoriesCheck = await Promise.all(postCategoriesIds);
    const hasNotCategory = categoriesCheck.some((category) => !category);

    if (hasNotCategory) {
      return { type: 'BAD_REQUEST', message: '"categoryIds" not found' };
    }
    const blogPostsPromises = categoryIds.map(async (categoryId) => {
      await PostCategory.create(
        { postId: newBlogPost.id, categoryId },
        { transaction: t },
      );
    });
    await Promise.all(blogPostsPromises);

    await t.commit();
    return { type: null, message: newBlogPost };
  } catch (err) {
    await t.rollback();
    console.error(err.message);
  }
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const updatePost = async (id, { title, content, userEmail }) => {
  const t = await sequelize.transaction();
  try {
    const postData = { title, content };
    const validationResult = validateUpdatePostSchema(postData);

    if (validationResult.type) return validationResult;

    const userLoggedIn = await User.findOne({ where: { email: userEmail } });
    const { id: userLoggedInId } = userLoggedIn.dataValues;

    const post = await BlogPost.findOne({ where: { id } });
    if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };

    if (userLoggedInId !== post.userId) {
      return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
    }

    await BlogPost.update({ title, content }, { where: { id }, transaction: t });

    await t.commit();
    const updatedPost = await getPostById(id);
    return { type: null, message: updatedPost };
  } catch (err) {
    await t.rollback();
    console.error(err.message);
  }
};

const deletePost = async (id, userEmail) => {
  const t = await sequelize.transaction();
  try {
    const userLoggedIn = await User.findOne({ where: { email: userEmail } });
    const { id: userLoggedInId } = userLoggedIn.dataValues;

    const post = await BlogPost.findOne({ where: { id } });
    if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };

    if (userLoggedInId !== post.userId) {
      return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
    }

    await BlogPost.destroy({ where: { id }, transaction: t });

    await t.commit();
    return { type: null, message: 'Post deleted successfully' };
  } catch (err) {
    await t.rollback();
    console.error(err.message);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
