module.exports = (sequelize, DataTypes) => {

  const Adicionais = sequelize.define('Adicionais', {
    nome: DataTypes.STRING,
    valor: DataTypes.DECIMAL
  }, {});
  Adicionais.associate = function (models) {
    // associations can be defined here
    Adicionais.hasMany(models.itensVendasAdicionai, { foreignKey: 'adicionalId' });

  };
  return Adicionais;
};