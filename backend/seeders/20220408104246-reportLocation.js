"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *
     */

    await queryInterface.bulkInsert(
      "ReportLocations",
      [
        {
          reportId: 1,
          latitude: "52.4009875911838",
          longitude: "16.93562077112432"
        },
        { 
          reportId: 2,
          latitude: "52.40552028480838",
          longitude: "16.89988877664916"
        },
        {
          reportId: 3,
          latitude: "52.399332682231986",
          longitude: "16.93585662587333"
        },
        {
          reportId: 4,
          latitude: "52.408182125910734",
          longitude: "16.95472500579421"
        }
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

     await queryInterface.bulkDelete('ReportLocations', null, {});
  },
};
