const router = require("express").Router();
const { User } = require("../../models");
const requireLogin = require("../../middlewares/requireLogin");

router.get("/users/:id", requireLogin, async (req, res) => {
  // find user as well as user notes
  const user = await User.findById(req.user.id).populate("notes");
  res.json(user);
});

router.get("/users/current", requireLogin, (req, res) => {
  res.send(req.user);
});

module.exports = router;
