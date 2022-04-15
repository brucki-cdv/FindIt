const express = require('express');
const reportsController = require('../controllers/reportsController');
const router = express.Router();
const authController = require("../controllers/authController");

// router.use(authController.protectRoute);


router.post('/', reportsController.createReport)
router.get('/', reportsController.getReports)
router.get('/location', reportsController.getReportsLocation)
router.get('/:id', reportsController.getReport)
router.get('/user/:id', reportsController.getUserReport)
module.exports = router