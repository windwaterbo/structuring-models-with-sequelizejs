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
    return queryInterface.bulkInsert('CatToys', [{
      CatInfoId: 7,
      ToyId: 1
    },
    {
      CatInfoId: 7,
      ToyId: 2
    },
    {
      CatInfoId: 8,
      ToyId: 1
    },
    {
      CatInfoId: 9,
      ToyId: 1
    },
    {
      CatInfoId: 10,
      ToyId: 5
    },
    {
      CatInfoId: 12,
      ToyId: 3
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
    return queryInterface.bulkDelete('CatToys', null, {});
  },
};