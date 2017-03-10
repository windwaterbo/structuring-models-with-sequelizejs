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
    return queryInterface.bulkInsert('Owner', [{
        name: 'David',
        year: 11
      },
      {
        name: 'KYAN',
        year: 23
      },
      {
        name: 'Reo',
        year: 55
      },
      {
        name: 'Eleven',
        year: 9
      },
      {
        name: 'Alex',
        year: 28
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
    return queryInterface.bulkDelete('Owner', null, {});
  },
};