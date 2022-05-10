const AppError = require("../utlis/appError");
const {
  Report,
  ReportLocation,
  ReportCategory,
  ReportImage,
  User,
} = require("../models");

exports.createReport = async (req, res, next) => {
  try {
    const {
      categoryId,
      title,
      description,
      hasReward,
      reward,
      userId,
      images,
      longitude,
      latitude,
    } = req.body;

    console.log(req.body);

    if (
      !categoryId ||
      !title ||
      !description ||
      hasReward == null ||
      !userId ||
      images.length == 0 ||
      !longitude ||
      !latitude
    ) {
      return next(new AppError("Please provide all information", 400));
    }

    const newReport = await Report.create(req.body);
    if (!newReport) {
      return next(new AppError("Error while creating a report", 400));
    }
    images.map((image) => {
      ReportImage.create({ reportId: newReport.id, url: image });
    });

    await ReportLocation.create({
      reportId: newReport.id,
      longitude: longitude,
      latitude: latitude,
    });

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
    const report = await Report.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: ReportImage,
          attributes: ["url"],
        },
        {
          model: ReportLocation,
          attributes: ["longitude", "latitude"],
        },
      ],
    });
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
    const { limit, offset } = req.query;
    const pageLimit = limit ? +limit : 3;
    const page = offset ? offset * pageLimit : 0;

    const reports = await Report.findAndCountAll({
      limit: pageLimit,
      offset: page,
      include: [
        {
          model: ReportCategory,
          attributes: ["reportCategory"],
        },
        { model: ReportImage, attributes: ["url"] },
      ],
    });
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
          attributes: ["reportCategory"],
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

exports.getUserReport = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;
    const pageLimit = limit ? +limit : 3;
    const page = offset ? offset * pageLimit : 0;

    console.log(req.params.id);
    const userReport = await Report.findAll({
      offset: page,
      limit: pageLimit,
      where: { userId: req.params.id },
      include: [
        {
          model: ReportCategory,
          attributes: ["reportCategory"],
        },
        {
          model: ReportImage,
          attributes: ["url"],
        },
      ],
    });

    if (!userReport) {
      return next(
        new AppError("Something went wrong while getting user reports", 400)
      );
    }

    res.status(200).json({
      status: "success",
      userReport,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteReport = async (req, res, next) => {
  try {
    const deletedReport = Report.destroy({ where: { id: req.params.id } });
    if (!deletedReport) {
      return next(
        new AppError("Something went wrong while deleting report", 400)
      );
    }

    res.status(200).json({
      status: "success",
      deletedReport,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getReportImages = async (req, res, next) => {
  try {
    const reportImages = await ReportImage.findAll({
      where: { reportId: req.params.id },
    });

    if (!reportImages) {
      return next(
        new AppError("Something went wrong while deleting report", 400)
      );
    }
    res.status(200).json({
      status: "success",
      reportImages,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteReportImage = async (req, res, next) => {
  try {
    const deletedImage = ReportImage.destroy({ where: { id: req.params.id } });
    if (!deletedImage) {
      return next(
        new AppError("Something went wrong while deleting image", 400)
      );
    }

    res.status(200).json({
      status: "success",
      deletedImage,
    });
  } catch (error) {}
};

exports.updateReport = async (req, res, next) => {
  try {
    console.log("REG PARAMS = ", req.params.id);
    console.log("reg body = ", req.body);
    const updatedReport = Report.update(
      { ...req.body },
      {
        where: { id: req.params.id },
      }
    );

    let updatedReportLocation;
    let updatedReportImages;

    if (req.body.longitude || req.body.latitude) {
      updatedReportLocation = ReportLocation.update(
        {
          longitude: req.body.longitude,
          latitude: req.body.latitude,
        },
        { where: { reportId: req.params.id } }
      );
    }

    if (req.body.images.length > 0) {
      req.body.images.map((image) => {
        updatedReportImages = ReportImage.create({
          reportId: req.params.id,
          url: image,
        });
      });
    }

    if (!updatedReport || !updatedReportLocation) {
      return next(
        new AppError("Something went wrong while updating report", 400)
      );
    }

    res.status(200).json({
      status: "success",
      updatedReport,
    });
  } catch (error) {
    console.log(error.message);
  }
};
