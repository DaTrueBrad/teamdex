const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Image = sequelize.define("image", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  url: DataTypes.STRING({ length: 800 }),
});

module.exports = Image;
