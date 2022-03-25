'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Reports', [{
       categoryId: 2,
       title: 'Skradziono rower!',
       description: 'Fjanyt rower to byl dfawno go widzialem',
       hasReward: true,
       reward: 200,
       userId: 2,
       createdAt: "2020-01-01",
        updatedAt: "2020-01-01"
     }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Reports', null, {});
  }
};
