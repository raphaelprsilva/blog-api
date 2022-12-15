const { postService } = require('../services');
const { mapError } = require('../utils/errorMap');
const { getUserEmail } = require('../utils/userEmailFromToken');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;
    const userEmail = getUserEmail(token);
    const postData = { title, content, categoryIds, userEmail };

    const { type, message } = await postService.createPost(postData);

    if (type) {
      return res.status(mapError(type)).json({ message });
    }

    return res.status(201).json(message);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postService.getAllPosts();

    return res.status(200).json(posts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Internal server error' });
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
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
