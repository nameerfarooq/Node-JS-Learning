var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createUser", async (req, res) => {
  const createdUser = await userModel.create({
    username: "nameer",
    password: "abcd",
    email: "nameer@gmail.com",
    fullName: "Muhammad nameer",
  });
  res.send(createdUser);
});
router.get("/createPost", async (req, res) => {
  const createdPost = await postModel.create({
    postText: "Hello world",
    createdBy: "6639eab233621ebbb4c20b1e",
  });
  let user = await userModel.findOne({ _id: "6639eab233621ebbb4c20b1e" });
  console.log(user);
  user.posts.push(createdPost?._id);
  await user.save();
  res.send(createdPost);
});
router.get("/userallposts", async (req, res) => {
  const allPosts = await userModel
    .findOne({ _id: "6639eab233621ebbb4c20b1e" })
    .populate("posts");
  res.send(allPosts.posts);
});

module.exports = router;
