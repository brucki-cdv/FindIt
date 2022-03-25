'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report.hasMany(models.UserReportInformation, {
        foreignKey: 'reportId'
      })

      Report.belongsTo(models.ReportCategory, {
        foreignKey: 'categoryId'
      })
      Report.belongsTo(models.User, {
        foreignKey: 'userId'
      })

      Report.hasOne(models.ReportLocation, {
        foreignKey: 'reportId'
      })
    }
  }
  Report.init({
    categoryId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    hasReward: DataTypes.BOOLEAN,
    reward: DataTypes.FLOAT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};