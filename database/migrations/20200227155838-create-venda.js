'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      observacao: {
        type: Sequelize.STRING
      },
      data_hora_venda: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      vl_total: {
        type: Sequelize.DECIMAL
      },
      vl_pago: {
        type: Sequelize.DECIMAL
      },
      vl_total_desconto: {
        type: Sequelize.DECIMAL
      },
      vl_tx_entrega: {
        type: Sequelize.DECIMAL
      },
      vl_troco: {
        type: Sequelize.DECIMAL
      },
      vl_credito: {
        type: Sequelize.DECIMAL
      },
      id_cliente: {
        type: Sequelize.INTEGER
      },
      id_forma_pagamento: {
        type: Sequelize.INTEGER
      },
      destino_venda: {
        type: Sequelize.STRING
      },
      nome_cliente: {
        type: Sequelize.STRING
      },
      endereco_entrega: {
        type: Sequelize.STRING
      },
      bairro_entrega: {
        type: Sequelize.STRING
      },
      ponto_referencia: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Vendas');
  }
};