'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Vendas', 'itens', {
          type: Sequelize.DataTypes.JSON
        }, { transaction: t })
      ]);
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Vendas', 'itens', { transaction: t })
      ]);
    });
  }
};
