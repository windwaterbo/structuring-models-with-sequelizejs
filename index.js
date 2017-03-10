'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
module.exports = exports = function (config) {
  const db = {};

  let sequelize;

  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

  fs.readdirSync(__dirname + '/model')
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = sequelize.import(path.join(__dirname + '/model', file));
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  // Sync all defined models to the DB.  
  // If force is true, each DAO will do DROP TABLE IF EXISTS ..., before it tries to create its own table
  // Match a regex against the database name before syncing, a safety check for cases where force: true is used in tests but not live code
  sequelize.sync(/**{ force: true, match: /Dev/ }*/);
  return db;
};