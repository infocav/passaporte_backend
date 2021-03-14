'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Clientes', 'PossuiConta', {
          type: Sequelize.DataTypes.BOOLEAN
        }, { transaction: t }),
        queryInterface.addColumn('Clientes', 'limiteConta', {
          type: Sequelize.DataTypes.DECIMAL
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Clientes', 'PossuiConta', { transaction: t }),
        queryInterface.removeColumn('Clientes', 'limiteConta', { transaction: t })

      ]);
    });
  }
};
