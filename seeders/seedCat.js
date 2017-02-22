'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
     Add altering commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.bulkInsert('Person', [{
     name: 'John Doe',
     isBetaMember: false
     }], {});
     */
    return queryInterface.bulkInsert('Cat', [{
        type: '愛琴海貓'
      },
      {
        type: '蘇格蘭摺耳貓'
      },
      {
        type: '伯曼貓'
      },
      {
        type: '曼島貓'
      },
      {
        type: '頓斯科伊貓'
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.bulkDelete('Person', null, {});
     */
    return queryInterface.bulkDelete('Cat', null, {});
  },
};