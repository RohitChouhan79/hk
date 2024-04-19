// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');

router.get('/add', userController.renderAddUserForm);
router.post('/add', userController.addUser);

module.exports = router;