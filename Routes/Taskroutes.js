// taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../Controller/TaskController');

router.get('/add', taskController.renderAddTaskForm);
router.post('/add', taskController.addTask);

module.exports = router;
