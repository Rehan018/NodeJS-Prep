const Sequelize = require("sequelize");
const sequelize = require("../util/databse");

const Apmt = sequelize.define("appointments", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});

module.exports = Apmt;
