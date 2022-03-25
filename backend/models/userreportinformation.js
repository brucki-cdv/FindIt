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
      UserReportInformation.hasOne(models.UserReportLocation, {
        foreignKey: "userReportInformationId",
      });

      UserReportInformation.belongsTo(models.Report, {
        foreignKey: "reportId",
      });

      UserReportInformation.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  UserReportInformation.init(
    {
      reportId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserReportInformation",
    }
  );
  return UserReportInformation;
};
