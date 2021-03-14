'use strict';
module.exports = (sequelize, DataTypes) => {
  const contasPagamento = sequelize.define('contasPagamento', {
    contaId: DataTypes.INTEGER,
    dataInicial: DataTypes.DATE,
    dataFinal: DataTypes.DATE,
    valorPago: DataTypes.DECIMAL,
    debitoRestante: DataTypes.DECIMAL
  }, {});
  contasPagamento.associate = function(models) {
    // associations can be defined here
  };
  return contasPagamento;
};