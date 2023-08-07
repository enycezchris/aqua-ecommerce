const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
  }
);

const setupRDSConnection = async () => {
  try {
    await db.authenticate();
    console.log("Connected to RDS DB");
  } catch (error) {
    console.error("Not connected to RDS DB");
  }
};

setupRDSConnection();

module.exports = db;
