'use strict';
module.exports = (sequelize, DataTypes) => {
  const faturaCliente = sequelize.define('faturaCliente', {
    contaId: DataTypes.INTEGER,
    data_fechamento: DataTypes.DATE
  }, {});
  faturaCliente.associate = function(models) {
    // associations can be defined here
    faturaCliente.belongsTo(models.contasCliente, { foreignKey: 'contaId', targetKey: 'id' });
    faturaCliente.hasMany(models.movimentacaoFatura, { foreignKey: 'faturaId'});


  };
  return faturaCliente;
};