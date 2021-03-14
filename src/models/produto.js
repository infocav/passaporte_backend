'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    detalhar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    valor: DataTypes.DECIMAL
  }, {});
  Produto.associate = function (models) {
    // associations can be defined here
    // Produto.hasMany(models.itensVenda);

  };
  return Produto;
};