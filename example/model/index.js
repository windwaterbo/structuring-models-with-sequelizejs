const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const familyDb = require('structuring-models-with-sequelizejs')(config);
module.exports = exports = familyDb;