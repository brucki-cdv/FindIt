'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReportImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reportId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReportImages');
  }
};