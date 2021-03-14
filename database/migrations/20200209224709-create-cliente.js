'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      sobrenome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      endreco: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      ponto_referencia: {
        type: Sequelize.STRING
      },
      observacao: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      aniversario: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Clientes');
  }
};