"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReportLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReportLocation.belongsTo(models.Report, { foreignKey: "reportId" });
    }
  }
  ReportLocation.init(
    {
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "ReportLocation",
    }
  );
  return ReportLocation;
};
