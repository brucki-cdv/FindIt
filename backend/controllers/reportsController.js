const AppError = require("../utlis/appError");
const { Report, ReportLocation, ReportCategory } = require("../models");

exports.createReport = async (req, res, next) => {
  try {
    const { categoryId, title, description, hasReward, reward, userId } =
      req.body;

    console.log(req.body);

    if (
      !categoryId ||
      !title ||
      !description ||
      hasReward == null ||
      !reward ||
      !userId
    ) {
      return next(new AppError("Please provide all information", 400));
    }

    const newReport = await Report.create(req.body);
    if (!newReport) {
      return next(new AppError("Error while creating a report", 400));
    }

    res.status(200).json({
      status: "success",
      newReport,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getReport = async (req, res, next) => {
  try {
    const report = await Report.findOne({ where: { id: req.params.id } });
    if (!report) {
      return next(
        new AppError("Something went wrong while finding report", 400)
      );
    }

    res.status(200).json({
      status: "success",
      report,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getReports = async (req, res, next) => {
  try {
    const reports = await Report.findAll();
    res.status(200).json({
      status: "success",
      reports,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getReportsLocation = async (req, res, next) => {
  try {
    const reportsLocation = await Report.findAll({
      include: [
        {
          model: ReportLocation,
          attributes: ["longitude", "latitude"],
        },
        {
          model: ReportCategory,
          attributes: ["reportName"],
        },
      ],
    });

    if (!reportsLocation) {
      return next(
        new AppError("Something went wrong while getting reports location", 400)
      );
    }

    res.status(200).json({
      status: "success",
      reportsLocation,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteReport = async (req, res, next) => {};
exports.updateReport = async (req, res, next) => {};
