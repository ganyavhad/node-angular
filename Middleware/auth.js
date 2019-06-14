var jwt = require("jsonwebtoken");
var config = require("config");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  const cipher = config.get("jwtcipher");
  if (!token) {
    res.status(401).send("Access denied. No token provided.");
  } else {
    try {
      const decoded = jwt.verify(token, cipher);
      req.body = decoded;
      next();
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
};
