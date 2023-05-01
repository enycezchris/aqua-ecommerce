const path = require("path");
const rootDirectory = require("../utils/path");

exports.get404Error = (req, res, next) => {
  res.status(404).sendFile(path.join(rootDirectory, "views", "error.html"));
};
exports.get401Error = (req, res, next) => {
  res
    .status(401)
    .sendFile(path.join(rootDirectory, "views", "invalidLogin.html"));
};
