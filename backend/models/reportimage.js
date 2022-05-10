"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReportImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReportImage.belongsTo(models.Report, { foreignKey: "reportId" });
    }
  }
  ReportImage.init(
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "ReportImage",
    }
  );
  return ReportImage;
};
