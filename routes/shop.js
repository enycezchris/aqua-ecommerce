const express = require("express");
const router = express.Router();
const productsController = require("../controllers/shop");
const userController = require("../controllers/user");
const cartController = require("../controllers/cart");
const authController = require("../controllers/auth");
const checkoutController = require("../controllers/checkout");

router.get("/products", productsController.fetchAllProducts);
router.get("/product/:id", productsController.fetchSingleProduct);
router.get("/userProducts", productsController.userGetProducts);
router.get("/cart", authController.isLoggedIn, cartController.userGetCart);
router.put("/cart", authController.isLoggedIn, cartController.addToCart);
router.delete(
  "/cart",
  authController.isLoggedIn,
  cartController.removeFromCart
);
router.get("/orders", authController.isLoggedIn, cartController.getUserOrders);
router.post(
  "/checkout",
  authController.isLoggedIn,
  checkoutController.orderCheckout
);
router.post(
  "/order",
  authController.isLoggedIn,
  cartController.createOrderFromCart
);

module.exports = router;
