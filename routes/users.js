const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');

router.get('/signup', userController.signup);
router.get('/signin', userController.signin);
router.post('/create', userController.createUser);
router.post('/createSession', userController.createSession);
   
module.exports = router;