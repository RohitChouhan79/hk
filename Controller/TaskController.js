// taskController.js
const Task = require('../Dbd/Migratoion/Models/Task');
const User = require('../Dbd/Migratoion/Models/User');

const taskController = {
  renderAddTaskForm: async (req, res) => {
    // console.log("object");
    try {
      const users = await User.query();
      res.render('addTaskForm', { users });
    } catch (error) {
    console.log(error);
      res.status(500).send('Error fetching users');
    }
  },

  addTask: async (req, res) => {
    console.log(req.body);
    try {
      const { userId, taskName, taskType, status } = req.body;
      await Task.query().insert({ userId, taskName, taskType, status });
      res.send("task added succesfuly")
    } catch (error) {
        console.log(error);
      res.status(500).send('Error adding task',error);
    }
  }
};

module.exports = taskController;
