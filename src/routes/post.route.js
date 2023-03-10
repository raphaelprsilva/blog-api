const express = require('express');

const validateJWT = require('../middlewares/auth/validateJWT');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, postController.createPost);
router.get('/', validateJWT, postController.getAllPosts);
router.get('/search', validateJWT, postController.searchPosts);
router.get('/:id', validateJWT, postController.getPostById);
router.put('/:id', validateJWT, postController.updatePost);
router.delete('/:id', validateJWT, postController.deletePost);

module.exports = router;
