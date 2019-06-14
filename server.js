var express = require("express");
var mongoose = require("mongoose");
var userRouter = require("./routes/User");
var path = require("path");

var app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));
app.use("/api/User", userRouter);

app.listen(3000, () => {
  console.log("Listening on 3000");
});
