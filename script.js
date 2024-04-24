const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(function (req, res, next) {
  console.log("Middleware Hello world");
  next();
});
app.use(function (req, res, next) {
  console.log("Middleware Hello world 2");
  next();
});
app.get("/", function (req, res) {
  console.log("get 333 ");
  res.send("HEllo worl 1");
});
app.get("/abc", function (req, res) {
  console.log("get 1 ");
  res.render("index", { name: "Nameer" });
});
app.get("/profile/:username", (req, res) => {
  res.send(`Hello from ${req.params.username}`);
});
app.listen("3000", () => {
  console.log("Connected");
});
