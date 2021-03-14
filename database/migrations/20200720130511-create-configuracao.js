'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('configuracaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresaNome: {
        type: Sequelize.STRING
      },
      empresaEndereco: {
        type: Sequelize.STRING
      },
      empresaBairro: {
        type: Sequelize.STRING
      },
      empresaCnpj: {
        type: Sequelize.STRING
      },
      empresaTelefones: {
        type: Sequelize.JSON
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
    return queryInterface.dropTable('configuracaos');
  }
};