'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserReportLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     UserReportLocation.belongsTo(models.UserReportInformation, {
       foreignKey: 'userReportInformationId'
     })
    }
  }
  UserReportLocation.init({
    userReportInformationId: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'UserReportLocation',
  });
  return UserReportLocation;
};