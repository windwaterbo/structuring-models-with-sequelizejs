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
    return queryInterface.bulkInsert('CatInfo', [{
        nickName: 'QQ',
        OwnerId: 1,
        year: 2,
        CatId: 1
      },
      {
        nickName: 'CC',
        OwnerId: 1,
        year: 1,
        CatId: 2
      },
      {
        nickName: 'NUNU',
        OwnerId: 3,
        year: 3,
        CatId: 3
      },
      {
        nickName: 'Paper',
        OwnerId: 4,
        year: 5,
        CatId: 4
      },
      {
        nickName: 'BiBi',
        OwnerId: 5,
        year: 1,
        CatId: 5
      },
      {
        nickName: 'BuDing',
        OwnerId: 5,
        year: 2,
        CatId: 1
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
    return queryInterface.bulkDelete('CatInfo', null, {});
  },
};