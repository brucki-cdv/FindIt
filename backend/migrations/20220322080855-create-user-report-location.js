"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserReportLocations", {
      userReportInformationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      latitude: {
        type: Sequelize.FLOAT(2, 10),
        allowNull: false,
        validate: {
          isFloat: true,
        },
      },
      longitude: {
        type: Sequelize.FLOAT(2, 10),
        allowNull: false,
        validate: {
          isFloat: true,
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserReportLocations");
  },
};
