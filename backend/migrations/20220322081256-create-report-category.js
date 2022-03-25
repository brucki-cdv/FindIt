"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ReportCategories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reportName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["missing", "stolen"]],
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ReportCategories");
  },
};
