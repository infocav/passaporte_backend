'use strict';
module.exports = (sequelize, DataTypes) => {
  const Molho = sequelize.define('Molho', {
    nome: DataTypes.STRING,

  }, {});
  Molho.associate = function (models) {
    // associations can be defined here
    // Molho.hasMany(models.itensVenda);

  };
  return Molho;
};