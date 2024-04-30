var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/createUser", async (req, res) => {
  const userCreated = await userModel.create({
    name: "saad bhai",
    nickName: "saad",
    description: "I Love Python",
    categories: ["python", "django", "flask"],
  });
  res.send(userCreated);
});
router.get("/user", async (req, res) => {
  var regex = new RegExp("^MuhaMMAd", "i");
  const allUsers = await userModel.find({ name: regex });
  res.send(allUsers);
});
module.exports = router;
