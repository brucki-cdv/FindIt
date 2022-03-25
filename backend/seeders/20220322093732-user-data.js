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

    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Dariusz",
        lastName: "Kalamaga",
        email: "dkalamaga@gmail.com",
        phoneNumber: "678901451",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01"
      },
      {
        firstName: "Bartosz",
        lastName: "Rucki",
        email: "rucki@gmail.com",
        phoneNumber: "726766346",
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

    await queryInterface.bulkDelete("Users", null, {});
  },
};
