const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const { postService } = require('../services');
const { mapError } = require('../utils/errorMap');
const { getUserEmail } = require('../utils/userEmailFromToken');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id: userLoggedInId } = req.user.dataValues;
    const postData = { title, content, categoryIds, userLoggedInId };

    const { type, message } = await postService.createPost(postData);

    if (type) {
      return res.status(mapError(type)).json({ message });
    }

    return res.status(201).json(message);
  } catch (err) {
    console.log(err.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postService.getAllPosts();

    return res.status(200).json(posts);
  } catch (err) {
    console.log(err.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (err) {
    console.log(err.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { id: userLoggedInId } = req.user.dataValues;
    const postData = { title, content, userLoggedInId };

    const { type, message } = await postService.updatePost(id, postData);

    if (type) {
      return res.status(mapError(type)).json({ message });
    }

    return res.status(200).json(message);
  } catch (err) {
    console.log(err.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    const userEmail = getUserEmail(token);

    const { type, message } = await postService.deletePost(id, userEmail);

    if (type) {
      return res.status(mapError(type)).json({ message });
    }

    return res.status(204).send();
  } catch (err) {
    console.log(err.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
