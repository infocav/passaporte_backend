'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Telefone_Clientes', 'observacao', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Telefone_Clientes', 'principal', {
          type: Sequelize.DataTypes.BOOLEAN,
        }, { transaction: t })
      ]);
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Telefone_Clientes', 'observacao', { transaction: t }),
        queryInterface.removeColumn('Telefone_Clientes', 'principal', { transaction: t })
      ]);
    });
  }
};
