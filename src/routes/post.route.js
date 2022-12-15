const express = require('express');

const validateJWT = require('../middlewares/auth/validateJWT');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, postController.createPost);

module.exports = router;
