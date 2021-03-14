'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Caixas', 'endereco_ip_impressora', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Caixas', 'nome_impressora', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t })
      ]);
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Caixas', 'endereco_ip_impressora', { transaction: t }),
        queryInterface.removeColumn('Caixas', 'nome_impressora', { transaction: t })

      ]);
    });
  }
};
