const router = require("express").Router();
const { User } = require("../../models");
const passport = require("../../services/passport");

router.post("/auth/login", passport.authenticate("local"), (req, res) => {
  // when get to this point
  // then user is authenticated
  // send back user's informatio
  res.status(302).send(req.user);
});

router.get("/auth/logout", (req, res) => {
  // clear sessions, logout, and redirect to home page
  req.logout();
  res.redirect("/");
});

module.exports = router;

// genUser();

async function genUser() {
  await User.remove({});
  const user = await User.create({
    username: "developer",
    password: "love cats",
  });
}
