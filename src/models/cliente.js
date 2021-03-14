'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    endreco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    ponto_referencia: DataTypes.STRING,
    observacao: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    aniversario: DataTypes.DATE,
    telefones: DataTypes.JSON,
    PossuiConta: DataTypes.BOOLEAN,
    limiteConta: DataTypes.DECIMAL,
    oldcodcli: DataTypes.INTEGER,
    qtdoldcompras: DataTypes.INTEGER,

  }, {});
  Cliente.associate = function (models) {
    // associations can be defined here
    Cliente.hasMany(models.Telefone_Cliente);
    Cliente.hasMany(models.contasCliente, { foreignKey: 'clienteId' });
  };
  return Cliente;
};