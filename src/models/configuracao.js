'use strict';
module.exports = (sequelize, DataTypes) => {
  const configuracao = sequelize.define('configuracao', {
    empresaNome: DataTypes.STRING,
    empresaEndereco: DataTypes.STRING,
    empresaBairro: DataTypes.STRING,
    empresaCnpj: DataTypes.STRING,
    empresaTelefones: DataTypes.JSON
  }, {});
  configuracao.associate = function (models) {
    // associations can be defined here
  };
  return configuracao;
};