'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itensVendas', {

      vendaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'Vendas',
          key: 'id'
        }
      },
      itemId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'Produtos',
          key: 'id'
        }
      },
      itemSeq: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      molhoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {         // User hasMany WorkingDays n:n
          model: 'Molhos',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      total: {
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
    return queryInterface.dropTable('itensVendas');
  }
};