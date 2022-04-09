"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report.belongsTo(models.User, { foreignKey: "userId" });
      Report.belongsTo(models.ReportCategory, {foreignKey: "type" });
      Report.hasOne(models.ReportLocation, {foreignKey: "reportId"})
      Report.hasMany(models.ReportImage, {foreignKey: "reportId"})
    }
  }
  Report.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
         
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING(2048),
        validate: {
        
          notEmpty: true,
        },
      },
      hasReward: {
        type: DataTypes.BOOLEAN,
        validate: {
         
          notEmpty: true,
        },
      },
      reward: {
        type: DataTypes.INTEGER,
        validate: {
         
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Report",
    }
  );
  return Report;
};
