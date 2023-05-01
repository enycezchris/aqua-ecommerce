const Sequelize = require("sequelize");
const db = require("../utils/database");
const { UUID, UUIDV4 } = Sequelize;

const Order = db.define("order", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
});

module.exports = Order;
