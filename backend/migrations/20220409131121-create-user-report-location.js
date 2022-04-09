'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserReportLocations', {
      userReportInformationId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserReportLocations');
  }
};