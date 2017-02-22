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
    return queryInterface.bulkInsert('Toys', [{
        name: '貓跳台'
      },
      {
        name: '紙箱'
      },
      {
        name: '貓抓板'
      },
      {
        name: '貓咪戳戳樂'
      },
      {
        name: '逗貓棒'
      },
      {
        name: '紅外線逗貓台'
      },
      {
        name: '玩具球'
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
    return queryInterface.bulkDelete('Toys', null, {});
  },
};