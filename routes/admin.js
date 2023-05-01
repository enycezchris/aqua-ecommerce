const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.get("/add-products", (req, res, next) => {
  res.send("Add Product!");
});
router.post("/add-products");

router.get("/products");

module.exports = router;
