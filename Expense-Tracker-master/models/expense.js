const sequelize = require("../db/db");
const Sequelize = require("sequelize");

const expense = sequelize.define("expence_table", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  product: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = expense;
