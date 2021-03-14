'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItensVendasAdicionai = sequelize.define('itensVendasAdicionai', {
    vendaId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    itemSeq: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    adicionalSeq: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    adicionalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },

    valor: DataTypes.DECIMAL

  }, {});
  ItensVendasAdicionai.associate = function (models) {
    // associations can be defined here
    ItensVendasAdicionai.belongsTo(models.Adicionais, { foreignKey: 'adicionalId', targetKey: 'id' });
    // ItensVendasAdicionai.belongsTo(models.itensVenda);


  };
  return ItensVendasAdicionai;
};