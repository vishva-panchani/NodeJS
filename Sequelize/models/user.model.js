const {sequelize, DataTypes} = require('./../sequelizeConnection');

//const {Sequelize, DataTypes} = require('sequelize');


const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthdate: DataTypes.DATE,
  }, {
    tableName: 'users', // Optional: Custom table name
        timestamps: false        // Disable timestamps like createdAt, updatedAt
    });

module.exports = User;