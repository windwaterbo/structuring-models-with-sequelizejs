'use strict';
module.exports = function(sequelize, DataTypes) {
  var CatInfo = sequelize.define('CatInfo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nickName: {
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
        CatInfo.belongsTo(models.Owner);
        CatInfo.belongsTo(models.Cat, {
          // The default casing is `camelCase` however if the source model is configured with  underscored: true the foreignKey will be `snake_case`
          foreignKey: {
            allowNull: false,
            name: 'CatId' // The foreign key column in CatInfo will now be called CatId instead of the default catId.
          },
        });
        CatInfo.hasMany(models.CatToys);
      },
    },
    freezeTableName: true,
  });
  return CatInfo;
};