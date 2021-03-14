'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mesa = sequelize.define('Mesa', {
    mesa: DataTypes.STRING
  }, {});
  Mesa.associate = function(models) {
    // associations can be defined here
  };
  return Mesa;
};