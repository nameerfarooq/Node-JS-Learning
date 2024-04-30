var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/createFlash", (req, res) => {
  req.flash("name", "Muhammad Nameer");
  req.flash("age", 24);
  res.send("We have created a flash for you");
});

router.get("/readFlash", (req, res) => {
  console.log(req.flash("name"), req.flash("age"));
  res.send("Check console for reading flash message");
});

module.exports = router;
