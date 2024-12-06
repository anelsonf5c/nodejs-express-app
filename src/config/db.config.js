const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/database.sqlite',
  logging: console.log, // Optional: Logs SQL queries to the console
});

module.exports = sequelize;
