'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contasPagamentos', {
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
      dataInicial: {
        type: Sequelize.DATE
      },
      dataFinal: {
        type: Sequelize.DATE
      },
      valorPago: {
        type: Sequelize.DECIMAL
      },
      debitoRestante: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('contasPagamentos');
  }
};