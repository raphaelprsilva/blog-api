const express = require('express');

const { userController } = require('../controllers');
const validateJWT = require('../middlewares/auth/validateJWT');

const router = express.Router();

router.post('/', userController.create);
router.get('/', validateJWT, userController.getAll);
router.get('/:id', validateJWT, userController.getById);
router.delete('/me', validateJWT, userController.remove);

module.exports = router;
