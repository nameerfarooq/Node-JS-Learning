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
  var date1 = new Date("2024-04-20");
  var date2 = new Date("2024-04-31");
  const allUsers = await userModel.find({
    dateCreated: { $exists: true },
  });
  res.send(allUsers);
});
module.exports = router;
