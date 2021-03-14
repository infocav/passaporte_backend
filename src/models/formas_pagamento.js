'use strict';

const { BOOLEAN } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Formas_pagamento = sequelize.define('Formas_pagamento', {
    forma: DataTypes.STRING,
    conta_associada: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    digital: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Formas_pagamento.associate = function (models) {
    // associations can be defined here
  };
  return Formas_pagamento;
};