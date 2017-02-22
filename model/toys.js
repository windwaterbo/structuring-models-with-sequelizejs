'use strict';
module.exports = function(sequelize, DataTypes) {
  var Toys = sequelize.define('Toys', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Toys.hasMany(models.CatToys);
      },
    },
    freezeTableName: true,
  });
  return Toys;
};