const User = require("../models/Users");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const { validationResult } = require("express-validator");
// crypto is a built in node library
const crypto = require("crypto");
const Sequelize = require("sequelize");
const { Op } = Sequelize;

// setting up the nodemailer with sendGrid apikey to allow sending emails
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

exports.userLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // find the user that matches the req.body.username in the database table
    const user = await User.findOne({ where: { username } });
    if (user) {
      //   bcrypt compare the plain text password with the hashed password
      const matchedPassword = await bcrypt.compare(password, user.password);
      if (matchedPassword) {
        // if passwords matched then set the session user
        // saving the user inside req.session object
        req.session.user = user;
        req.session.isLoggedIn = true;
        res.json(user);
      }
    }
  } catch (e) {
    next(e);
  }
};
exports.userRegister = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const error = validationResult(req);
    const user = await User.create({ username, password, email });
    await user.save();
    // transporter => nodemailer that sends email through node
    transporter.sendMail({
      to: email,
      from: "imabaos@gmail.com",
      subject: "Registration",
      html: "<h1>Congratulations! Your registration was successful!</h1>",
    });
    res.json(user);
  } catch (e) {
    console.log("error:", e);
    next(e);
  }
};
exports.userLogOut = async (req, res, next) => {
  try {
    // destroys the session from database
    await req.session.destroy(() => {
      // clear the client side cookie with the key "connect.sid"
      res.clearCookie("connect.sid");
      res.send("Logged Out!");
    });
  } catch (e) {
    next(e);
  }
};
exports.isLoggedIn = async (req, res, next) => {
  try {
    if (req.session.user) {
      const user = await User.findByPk(req.session.user.id);
      // saving the user inside req object
      req.user = user;
      next();
    }
  } catch (e) {
    next(e);
  }
};

exports.getSession = async (req, res, next) => {
  try {
    const userSession = req.session.user;
    if (userSession) {
      res.json(userSession);
    } else {
      res.status(401).send("No session!");
    }
  } catch (e) {
    next(e);
  }
};
exports.getCsrfToken = async (req, res, next) => {
  try {
    const csrfToken = req.csrfToken();
    res.json(csrfToken);
    next();
  } catch (e) {
    next(e);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log("Req.body", req.body);
    // crypto.randomBytes creates a random long string (32 bits)
    crypto.randomBytes(32, async (err, buffer) => {
      if (err) {
        console.log("Error:", err);
      } else {
        // if theres no error, use the buffer to create a token with hexadecimal value
        const resetPasswordToken = buffer.toString("hex");
        // find a user where the email matches the req.body.email
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
          // if no user found throw new error
          const error = new Error("No account with that email exist!");
          next(error);
        } else {
          // set the passwordResetToken db field to the generated token from crypto.randomBytes
          user.passwordResetToken = resetPasswordToken;
          //   set the resettokenexp from db field to expire in an hour (3600000 milliseconds = 1 hour)
          user.passwordResetTokenExpiration = Date.now() + 3600000;
          user.save();
          transporter.sendMail({
            to: email,
            from: "imabaos@gmail.com",
            subject: "Password Reset",
            html: `<h1>Your requested password reset link</h1>
            <p> <a href="http://localhost:3000/reset/${resetPasswordToken}">Reset Password</a> </p>`,
          });
        }
        return user;
      }
    });
  } catch (e) {
    next(e);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    // gets the token from the url parameter ("/reset/:token")
    const passwordResetToken = req.params.token;
    const { password } = req.body;
    console.log("passwordReset", password);
    const user = await User.findOne({
      // find a user with the resetToken from db = resetToken from req.params
      //   and check if the expiration date is greater than the current time
      where: {
        passwordResetToken: passwordResetToken,
        passwordResetTokenExpiration: { [Op.gt]: Date.now() },
      },
    });
    if (user) {
      // if theres a user, set the user's password to the req.body.password
      user.password = password;
      //   set the resetPasswordToken from db to null
      user.passwordResetToken = null;
      //   set the resetPasswordTokenExpiration from db to null
      user.passwordResetTokenExpiration = null;
      user.save();
      console.log("userReset", user);
      return user;
    } else {
      const error = new Error("Token does not match or expired!");
      next(error);
    }
  } catch (e) {
    next(e);
  }
};
