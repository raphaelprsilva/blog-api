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

module.exports = {
  createPost,
};
