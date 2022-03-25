'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReportLocations', {
      reportId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true
      },
      latitude: {
        type: Sequelize.FLOAT(2, 10),
        allowNull: false,
        validate: {
          isFloat: true
        }
      },
      longitude: {
        type: Sequelize.FLOAT(2,10),
        validate: {
          isFloat: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReportLocations');
  }
};