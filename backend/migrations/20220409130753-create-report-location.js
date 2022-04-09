'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReportLocations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reportId: {
        type: Sequelize.INTEGER
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      latitude: {
        type: Sequelize.FLOAT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReportLocations');
  }
};