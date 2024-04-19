// userController.js
const User = require('../Dbd/Migratoion/Models/User');

const userController = {
  renderAddUserForm: (req, res) => {
    res.render('addUserForm');
  },

  addUser: async (req, res) => {
    // console.log(req.body);
    try {
      const { name, email, mobile } = req.body;
      console.log(name);
      await User.query().insert({ name, email, mobile });
      console.log("Added Succesfully");
    } catch (error) {
        console.log(error);
      res.status(500).send('Error adding user');
    }
  }
};

module.exports = userController;
