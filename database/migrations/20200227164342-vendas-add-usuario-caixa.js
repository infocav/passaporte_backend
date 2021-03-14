'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Vendas', 'id_usuario', {
          type: Sequelize.DataTypes.INTEGER
        }, { transaction: t }),
        queryInterface.addColumn('Vendas', 'id_caixa', {
          type: Sequelize.DataTypes.INTEGER
        }, { transaction: t }),
        queryInterface.addColumn('Vendas', 'id_abertura_caixa', {
          type: Sequelize.DataTypes.INTEGER
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Vendas', 'id_usuario', { transaction: t }),
        queryInterface.removeColumn('Vendas', 'id_caixa', { transaction: t }),
        queryInterface.removeColumn('Vendas', 'id_abertura_caixa', { transaction: t })

      ]);
    });
  }
};
