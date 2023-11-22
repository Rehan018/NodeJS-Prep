const Sequelize = require("sequelize");
const sequelize = new Sequelize("expense_application", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
