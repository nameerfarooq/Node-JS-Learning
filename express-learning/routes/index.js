var express = require("express");
var router = express.Router();
var userModel = require("./users");
/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.ban = true;
  res.render("index", { title: "Express" });
});
router.get("/check", function (req, res) {
  if (req.session.ban === true) {
    res.send("BANNED");
  } else {
    res.send("NOT BANNED");
  }
});
router.get("/deleteban", function (req, res) {
  if (req.session.ban === true) {
    req.session.destroy((err) => {
      if (err) throw err;
    });
    res.send("Ban removed");
  } else {
    res.send("NOT BANNED");
  }
});

router.get("/create", async function (req, res) {
  const createdUser = await userModel.create({
    name: "Muhammad Zayan Farooq",
    username: "MuhammadNameer123",
    age: 23,
  });
  res.send(createdUser);
});

router.get("/find", async (req, res) => {
  let users = await userModel.find({ age: 23 });
  res.send(users);
});
router.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ age: 23 });
  res.send(users);
});

module.exports = router;
