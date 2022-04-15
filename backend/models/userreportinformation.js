"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserReportInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserReportInformation.belongsTo(models.Report, {
        foreignKey: "reportId",
      });
      UserReportInformation.belongsTo(models.User, { foreignKey: "userId" });
      UserReportInformation.hasOne(models.UserReportLocation, {
        foreignKey: "userReportInformationId",
      });
    }
  }
  UserReportInformation.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING(2048),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "UserReportInformation",
    }
  );
  return UserReportInformation;
};
