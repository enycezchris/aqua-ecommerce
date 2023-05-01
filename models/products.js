const Sequelize = require("sequelize");
const db = require("../utils/database");

const { STRING, DOUBLE, TEXT } = Sequelize;

const Product = db.define("product", {
  name: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: DOUBLE,
    allowNull: false,
  },
  description: {
    type: TEXT,
  },
  img: {
    type: STRING,
  },
});

module.exports = Product;
