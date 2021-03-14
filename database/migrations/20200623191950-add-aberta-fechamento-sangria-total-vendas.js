'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Abertura_fechamento_caixas', 'valor_sangria', {
          type: Sequelize.DataTypes.DECIMAL
        }, { transaction: t }),
        queryInterface.addColumn('Abertura_fechamento_caixas', 'total_vendas', {
          type: Sequelize.DataTypes.DECIMAL
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Abertura_fechamento_caixas', 'status', { transaction: t }),
        queryInterface.removeColumn('Abertura_fechamento_caixas', 'total_vendas', { transaction: t })

      ]);
    });
  }
};
