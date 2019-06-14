var express = require("express");
var router = express.Router();
var auth = require("../Middleware/auth.js");
var User = require("../api/Service/User");

router.get("/login", User.login);
router.post("/save", User.save);
router.put("/edit", auth, User.edit);

module.exports = router;
