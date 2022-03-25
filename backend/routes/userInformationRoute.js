const express = require('express');
const userReportInformationController = require('../controllers/userReportInformationController');
const router = express.Router();


router.get('/:id', userReportInformationController.getInformations)


module.exports = router