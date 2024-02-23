const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

const middleware = require('../Middleware/Common');


router.post('/register', userController.registerUser);
router.post('/login', userController.userLogin);





module.exports = router;
