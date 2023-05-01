const Sequelize = require("sequelize");
const db = require("../utils/database");
const { INTEGER } = Sequelize;

const CartItem = db.define("cartItem", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
    validate: {
      min: 0,
    },
  },
});

module.exports = CartItem;
