const User = require("../models/Users");

exports.findUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(1);
    res.json(user);
  } catch (e) {
    next(e);
  }
};
