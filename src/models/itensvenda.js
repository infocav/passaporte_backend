'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItensVenda = sequelize.define('itensVenda', {
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
    molhoId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
  }, {});
  ItensVenda.associate = function (models) {
    // associations can be defined here
    //ItensVenda.belongsTo(models.Venda, { foreignKey: 'vendaId', targetKey: 'id' });
    ItensVenda.belongsTo(models.Produto, { foreignKey: 'itemId', targetKey: 'id' });
    ItensVenda.belongsTo(models.Molho, { foreignKey: 'molhoId', targetKey: 'id' });
    ItensVenda.hasMany(models.itensVendasAdicionai,
      {
        foreignKey: 'vendaId'//{ 'vendaId': 'vendaId', 'itemId': 'itemId' }
      }
    );


  };
  return ItensVenda;
};