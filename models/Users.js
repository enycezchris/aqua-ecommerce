const Sequelize = require("sequelize");
const db = require("../utils/database");
const { STRING, BOOLEAN, INTEGER, DATE } = Sequelize;

const User = db.define("user", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  passwordResetToken: {
    type: STRING,
  },
  passwordResetTokenExpiration: {
    type: DATE,
  },
});

module.exports = User;
