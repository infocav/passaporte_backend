'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telefone_Cliente = sequelize.define('Telefone_Cliente', {
    telefone: DataTypes.STRING,
    observacao: DataTypes.STRING,
    principal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Telefone_Cliente.associate = function (models) {
    // associations can be defined here
  };
  return Telefone_Cliente;
};