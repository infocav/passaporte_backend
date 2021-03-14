'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caixa = sequelize.define('Caixa', {
    nome: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    endereco_ip_impressora: DataTypes.STRING,
    nome_impressora: DataTypes.STRING
  }, {});
  Caixa.associate = function (models) {
    // associations can be defined here
    Caixa.hasMany(models.Abertura_fechamento_caixa, { foreignKey: 'id_caixa' });

  };
  return Caixa;
};