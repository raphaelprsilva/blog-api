const express = require('express');

const { categoryController } = require('../controllers');
const validateJWT = require('../middlewares/auth/validateJWT');

const router = express.Router();

router.post('/', validateJWT, categoryController.create);

module.exports = router;
