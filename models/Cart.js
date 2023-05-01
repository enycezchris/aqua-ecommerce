const Sequelize = require("sequelize");
const db = require("../utils/database");
const { INTEGER } = Sequelize;

const Cart = db.define("cart", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
