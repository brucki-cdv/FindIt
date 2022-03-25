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
    await queryInterface.bulkInsert("UserReportInformations", [
      {
        reportId: 1,
        title: "Widzialem go wlasnie tam!",
        description: "Byl fajny i wgl cool",
        userId: 2,
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

    await queryInterface.bulkDelete("UserReportInformations", null, {});
  },
};
