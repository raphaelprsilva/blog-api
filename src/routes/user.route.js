const express = require('express');

const { userController } = require('../controllers');
const validateJWT = require('../middlewares/auth/validateJWT');

const router = express.Router();

router.post('/', userController.create);
router.get('/', validateJWT, userController.getAll);

module.exports = router;
