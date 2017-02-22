'use strict';
module.exports = function(sequelize, DataTypes) {
  var CatToys = sequelize.define('CatToys', {
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
        CatToys.belongsTo(models.Toys, {
          foreignKey: { allowNull: false }
        });
        CatToys.belongsTo(models.CatInfo, {
          foreignKey: { allowNull: false },
          onDelete: 'CASCADE' // set Null, restrict, no action, cascade
        });
      },
    },
    freezeTableName: true,
  });
  return CatToys;
};