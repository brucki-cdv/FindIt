const express = require('express');
const reportsController = require('../controllers/reportsController');
const router = express.Router();


router.post('/', reportsController.createReport)
router.get('/', reportsController.getReports)
router.get('/location', reportsController.getReportsLocation)
router.get('/:id', reportsController.getReport)
module.exports = router