const sequelize = require('../sequelize')
const {DataTypes} = require('sequelize')

const Team = sequelize.define('team', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: DataTypes.STRING({length: 30}),
  notes: DataTypes.STRING({length: 255}),
})

module.exports = Team