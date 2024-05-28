const express = require('express');
const router = express.Router();
const {isAuth} = require('../MiddleWares/Auth.cjs');
const AuthController = require('../controllers/AuthController.cjs');
const validateUserSignIn = require('../MiddleWares/Validation/ValidationUser.cjs');
router.post('/login', AuthController.login, validateUserSignIn, userValidation);
module.exports = router;
