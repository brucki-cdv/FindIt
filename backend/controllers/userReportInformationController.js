const AppError = require("../utlis/appError");
const {
  User,
  UserReportInformation,
  UserReportLocation,
} = require("../models");

exports.getInformations = async (req, res, next) => {
  try {
    const informations = await UserReportInformation.findAll({
      include: [
        {
          model: UserReportLocation,
          attributes: ["longitude", "latitude"],
        },
        { model: User, where: { id: req.params.id }, attributes: ["email"] },
      ],
    });

    if (!informations) {
      return next(
        new AppError(
          "Something went wrong while searching user informations",
          400
        )
      );
    }
    res.status(200).json({
      status: "success",
      informations,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.createInformation = async (req, res, next) => {
  try {
    const { reportId, userId, title, description, date, longitude, latitude } =
      req.body;
    if (
      !reportId ||
      !userId ||
      !title ||
      !description ||
      !date ||
      !longitude ||
      !latitude
    ) {
      return next(new AppError("Please provide all information", 400));
    }

    const newUserReportInformation = await UserReportInformation.create(
      req.body
    );
    if (!newUserReportInformation) {
      return next(new AppError("Error while creating a new Information", 400));
    }

    const newUserReportLocation = await UserReportLocation.create({
      userReportInformationId: newUserReportInformation.id,
      longitude: longitude,
      latitude: latitude,
    });
    if (!newUserReportLocation) {
      return next(new AppError("Error while creating a new Information"));
    }

    res.status(200).json({
      status: "success",
      newUserReportInformation,
      newUserReportLocation,
    });
  } catch (error) {
    console.log(error);
  }
};


