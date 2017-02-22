'use strict';
module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define('Owner', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    year: {
      defaultValue: 20,
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Owner.hasMany(models.CatInfo);
      },
    },
    freezeTableName: true,
  });
  return Owner;
};