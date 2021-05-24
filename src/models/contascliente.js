'use strict';
module.exports = (sequelize, DataTypes) => {
  const contasCliente = sequelize.define('contasCliente', {
    clienteId: DataTypes.INTEGER,
    limite: DataTypes.DECIMAL,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {});
  contasCliente.associate = function (models) {
    // associations can be defined here
    // contasCliente.hasMany(models.contasMovimentacao, { foreignKey: 'contaId' }); //RETIRAR
    contasCliente.hasMany(models.faturaCliente, { foreignKey: 'contaId'});
    contasCliente.belongsTo(models.Cliente, { foreignKey: 'clienteId', targetKey: 'id' });


  };
  return contasCliente;
};