var jwt = require("jsonwebtoken");
var config = require("config");
var model = {
  login: (req, res) => {
    var cipher = config.get("jwtcipher");
    var token = jwt.sign({ id: 123 }, cipher, { expiresIn: 60 });
    res.status(200).send({ token: token });
  },
  save: (req, res) => {
    res.send("user service save");
  },
  edit: (req, res) => {
    res.send(req.body);
  }
};
module.exports = model;
