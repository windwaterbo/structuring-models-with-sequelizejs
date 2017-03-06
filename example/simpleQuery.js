require('rootpath')();
const db = require('model');

db.Cat.findAll({}).then((catList) => {
  console.log('Cat list : ', catList);
});