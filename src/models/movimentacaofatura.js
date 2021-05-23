'use strict';
module.exports = (sequelize, DataTypes) => {
  const movimentacaoFatura = sequelize.define('movimentacaoFatura', {
    faturaId: DataTypes.INTEGER,
    vendaId: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    tipo_lancamento: DataTypes.CHAR,
    observacao: DataTypes.STRING
  }, {});
  movimentacaoFatura.associate = function(models) {
    // associations can be defined here
    movimentacaoFatura.belongsTo(models.faturaCliente, { foreignKey: 'faturaId', targetKey: 'id' });

  };
  return movimentacaoFatura;
};