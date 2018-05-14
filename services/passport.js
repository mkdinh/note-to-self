const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

passport.use(
  new LocalStrategy(async (username, password, next) => {
    const user = await User.findOne({ username });
    // if username does not exists
    if (!user) return next(null, false, { error: "Incorrect username" });
    // if password is incorrect
    const validPass = await user.verifyPass(password);
    if (!validPass) return next(null, false, { error: "Incorrect password" });
    // user input correct credentials
    next(null, user);
  }),
);

passport.serializeUser((user, next) => {
  next(null, user.id);
});

passport.deserializeUser(async (id, next) => {
  const user = await User.findById(id);
  next(null, user);
});

module.exports = passport;
