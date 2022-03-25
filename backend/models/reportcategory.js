'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReportCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReportCategory.hasMany(models.Report, {
        foreignKey: 'categoryId'
      })
    }
  }
  ReportCategory.init({
    reportName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ReportCategory',
  });
  return ReportCategory;
};