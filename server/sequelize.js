require('dotenv').config();
const {DATABASE_URL} = process.env
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
  DATABASE_URL
)
module.exports = sequelize