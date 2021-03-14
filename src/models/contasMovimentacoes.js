'use strict';
module.exports = (sequelize, DataTypes) => {
  const contasMovimentacao = sequelize.define('contasMovimentacao', {
    contaId: DataTypes.INTEGER,
    pagamentoId: DataTypes.INTEGER,
    vendaId: DataTypes.INTEGER
  }, {});
  contasMovimentacao.associate = function (models) {
    // associations can be defined here
    contasMovimentacao.belongsTo(models.Venda, { foreignKey: 'vendaId', targetKey: 'id' });

  };
  return contasMovimentacao;
};