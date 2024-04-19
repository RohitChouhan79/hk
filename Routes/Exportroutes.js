// exportRoutes.js
const express = require('express');
const router = express.Router();
const exportController = require('../Controller/ExportController');

router.get('/', exportController.exportData);

module.exports = router;
