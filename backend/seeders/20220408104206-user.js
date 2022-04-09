"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Adam",
          lastName: "Nowak",
          email: "anowak@gmail.com",
          phoneNumber: "123123123",
          password:
            "$2a$12$nq.DzLeo6TMhzVoxg.tFe.2okYfKSo4w9DuxyOOUaso1j3jpt2EM.",
        },
        {
          firstName: "Bartosz",
          lastName: "Rucki",
          email: "brucki@gmail.com",
          phoneNumber: "726766346",
          password:  "$2a$12$nq.DzLeo6TMhzVoxg.tFe.2okYfKSo4w9DuxyOOUaso1j3jpt2EM."
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
     *
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
