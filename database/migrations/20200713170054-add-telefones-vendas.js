'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Vendas', 'telefones', {
          type: Sequelize.DataTypes.JSON
        }, { transaction: t })
      ]);
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Vendas', 'telefones', { transaction: t })
      ]);
    });
  }
};
