const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('booking_app', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;
