const sequelize = require('../sequelize')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  username: DataTypes.STRING({length: 25}),
  email: DataTypes.STRING({length: 100}),
  password: DataTypes.STRING({length: 255}),
})

module.exports = User