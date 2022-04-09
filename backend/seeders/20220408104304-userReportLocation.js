"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     *
     */

    await queryInterface.bulkInsert(
      "UserReportLocations",
      [
        {
          userReportInformationId: 1,
          latitude: "52.40796630694013",
          longitude: " 16.97654157007772",
        },
        {
          userReportInformationId: 2,
          latitude: "52.41465620403287",
          longitude: "16.89965292190015",
        },
        {
          userReportInformationId: 3,
          latitude: "52.42307108493633",
          longitude: "16.9244176705463",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */

    await queryInterface.bulkDelete("UserReportLocations", null, {});
  },
};
