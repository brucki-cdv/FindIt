const express = require("express");
const reportsController = require("../controllers/reportsController");
const router = express.Router();
const authController = require("../controllers/authController");

// router.use(authController.protectRoute);

router.post("/", reportsController.createReport);
router.get("/", reportsController.getReports);
router.get("/location", reportsController.getReportsLocation);
router.get("/:id", reportsController.getReport);
router.get("/user/:id", reportsController.getUserReport);
router.get("/image/:id", reportsController.getReportImages);
router.delete("/:id", reportsController.deleteReport);
router.delete("/image/:id", reportsController.deleteReportImage);
router.patch("/:id", reportsController.updateReport);
module.exports = router;
