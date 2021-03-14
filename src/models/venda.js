'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venda = sequelize.define('Venda', {
    observacao: DataTypes.STRING,
    data_hora_venda: DataTypes.DATE,
    status: DataTypes.STRING,
    vl_total: DataTypes.DECIMAL,
    vl_pago: DataTypes.DECIMAL,
    vl_total_desconto: DataTypes.DECIMAL,
    vl_tx_entrega: DataTypes.DECIMAL,
    vl_troco: DataTypes.DECIMAL,
    vl_credito: DataTypes.DECIMAL,
    id_cliente: DataTypes.INTEGER,
    id_forma_pagamento: DataTypes.INTEGER,
    destino_venda: DataTypes.STRING,
    nome_cliente: DataTypes.STRING,
    endereco_entrega: DataTypes.STRING,
    bairro_entrega: DataTypes.STRING,
    ponto_referencia: DataTypes.STRING,
    id_caixa: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    id_abertura_caixa: DataTypes.INTEGER,
    itens: DataTypes.JSON,
    telefones: DataTypes.JSON
  }, {});
  Venda.associate = function (models) {
    // associations can be defined here
    Venda.hasMany(models.itensVenda, { foreignKey: 'vendaId' });
    Venda.belongsTo(models.Cliente, { foreignKey: 'id_cliente', targetKey: 'id' });

    Venda.belongsTo(models.Formas_pagamento, { foreignKey: 'id_forma_pagamento', targetKey: 'id' });


  };
  return Venda;
};