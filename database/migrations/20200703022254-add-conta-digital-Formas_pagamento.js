'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Formas_pagamentos', 'digital', {
          type: Sequelize.DataTypes.BOOLEAN
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Formas_pagamentos', 'digital', { transaction: t })
      ]);
    });
  }
};
