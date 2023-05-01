const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/login", authController.userLogin);
router.post("/logout", authController.userLogOut);
// check from express-validator checks if the email input is an email
router.post("/register", check("email").isEmail(), authController.userRegister);
router.post("/reset", authController.resetPassword);
router.post("/reset/:token", authController.updatePassword);
router.get("/session", authController.isLoggedIn, authController.getSession);

module.exports = router;
