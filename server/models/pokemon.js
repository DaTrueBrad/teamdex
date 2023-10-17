const sequelize = require('../sequelize')
const {DataTypes} = require('sequelize')

const Pokemon = sequelize.define('pokemon', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  pokemonId: DataTypes.INTEGER,
})

module.exports = Pokemon