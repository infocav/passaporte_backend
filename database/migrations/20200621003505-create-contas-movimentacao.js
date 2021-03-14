'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contasMovimentacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {         // User hasMany WorkingDays n:n
          model: 'contasClientes',
          key: 'id'
        }
      },
      pagamentoId: {
        type: Sequelize.INTEGER
      },
      vendaId: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('contasMovimentacaos');
  }
};