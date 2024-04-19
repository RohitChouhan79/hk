// exportController.js
const exceljs = require('exceljs');
const User = require('../Dbd/Migratoion/Models/User');
const Task = require('../Dbd/Migratoion/Models/Task');

const exportController = {
  exportData: async (req, res) => {
    try {
      const users = await User.query();
      const tasks = await Task.query();
      console.log(users);
    //   const workbook = new exceljs.Workbook();
    //   const userSheet = workbook.addWorksheet('Users');
    //   const taskSheet = workbook.addWorksheet('Tasks');

    //   userSheet.columns = [
    //     { header: 'ID', key: 'id', width: 10 },
    //     { header: 'Name', key: 'name', width: 30 },
    //     { header: 'Email', key: 'email', width: 30 },
    //     { header: 'Mobile', key: 'mobile', width: 20 }
    //   ];
    //   users.forEach(user => {
    //     userSheet.addRow(user);
    //   });

    //   taskSheet.columns = [
    //     { header: 'ID', key: 'id', width: 10 },
    //     { header: 'User ID', key: 'userId', width: 10 },
    //     { header: 'Task Name', key: 'taskName', width: 30 },
    //     { header: 'Task Type', key: 'taskType', width: 20 },
    //     { header: 'Status', key: 'status', width: 15 }
    //   ];
    //   tasks.forEach(task => {
    //     taskSheet.addRow(task);
    //   });

    //   res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    //   res.setHeader('Content-Disposition', 'attachment; filename="export.xlsx"');
    //   await workbook.xlsx.write(res);
    //   res.end();
    } catch (error) {
      res.status(500).send('Error exporting data');
    }
  }
};

module.exports = exportController;
