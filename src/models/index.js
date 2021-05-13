const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');


const db = {};
const sequelize = new Sequelize(config);
// const sequelize = new Sequelize('postgres://postgres:guloso@172.17.0.1:5432/guloso');

// sequelize.authenticate().then(function(errors) { console.log(errors) });
const testandoConexao = async () => {
  try {
    console.log('TESTANDO CONEXAO');

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testandoConexao();

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    // const model = sequelize.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;