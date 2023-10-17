const sequelize = require('../sequelize')
const {DataTypes} = require('sequelize')

const Game = sequelize.define('game', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: DataTypes.STRING({length: 25}),
  generation: DataTypes.INTEGER
})

module.exports = Game