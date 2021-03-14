'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itensVendasAdicionais', {

      vendaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,

      },
      itemId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,

      },
      itemSeq: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,

      },
      adicionalSeq: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      adicionalId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'Adicionais',
          key: 'id'
        }
      },
      valor: {
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
    })
      .then(() => {
        return queryInterface.sequelize.query('ALTER TABLE "itensVendasAdicionais" ADD CONSTRAINT "FK_ITENS_VENDAS_ADICIONAIS" FOREIGN KEY ("vendaId","itemId","itemSeq") REFERENCES "itensVendas" ("vendaId","itemId","itemSeq") MATCH SIMPLE');
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itensVendasAdicionais');
  }
};