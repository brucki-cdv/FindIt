"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReportCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReportCategory.init(
    {
      reportCategory: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["missing", "stolen"]],
        
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "ReportCategory",
    }
  );
  return ReportCategory;
};
