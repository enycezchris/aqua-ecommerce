const Sequelize = require("sequelize");
const db = require("../utils/database");
const { INTEGER } = Sequelize;

const OrderItem = db.define("orderItem", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: INTEGER,
  },
});

module.exports = OrderItem;
