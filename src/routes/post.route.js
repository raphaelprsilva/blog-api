const express = require('express');

const validateJWT = require('../middlewares/auth/validateJWT');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, postController.createPost);
router.get('/', validateJWT, postController.getAllPosts);

module.exports = router;
