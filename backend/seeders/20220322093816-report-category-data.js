"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("ReportCategories", [
      {
        reportName: "stolen",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01"
      },
      {
        reportName: "missing",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('ReportCategories', null, {});
  },
};
