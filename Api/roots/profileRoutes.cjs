const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const {getProfile} = require('../controllers/userController');

router.get('/profile', isAuth, getProfile);

module.exports = router;
