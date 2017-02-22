const db = require('models');

db.Cat.findAll({}).then((catList) => {
  console.log('Cat list : ', catList);
});