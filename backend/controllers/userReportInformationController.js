const AppError = require("../utlis/appError");
const { UserReportInformation, UserReportLocation } = require("../models");

exports.getInformations = async (req, res, next) => {
  try {
    const informations = await UserReportInformation.findAll({
      include: [
        {
          model: UserReportLocation,
          attributes: ["longitude", "latitude"],
        },
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
exports.createInformation = async (req, res, next) => {};
