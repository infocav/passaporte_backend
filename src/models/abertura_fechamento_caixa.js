'use strict';
module.exports = (sequelize, DataTypes) => {
  const Abertura_fechamento_caixa = sequelize.define('Abertura_fechamento_caixa', {
    id_caixa: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    saldo_inicial: DataTypes.DECIMAL,
    data_abertura: DataTypes.DATE,
    data_fechamento: DataTypes.DATE,
    valor_sangria: DataTypes.DECIMAL,
    total_vendas: DataTypes.DECIMAL

  }, {});
  Abertura_fechamento_caixa.associate = function (models) {
    // associations can be defined here
    Abertura_fechamento_caixa.belongsTo(models.Caixa, { foreignKey: 'id_caixa', targetKey: 'id' });

  };
  return Abertura_fechamento_caixa;
};