const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const util = require("util");
const saltFactor = 10;

const UserSchema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    default: null,
  },
  facebookId: String,
  displayName: String,
  notes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Note",
      default: [],
    },
  ],
});

// Hashing password prior to saving new model
UserSchema.pre("save", async function(next) {
  // this refer to user model
  // only hash the password if it is new
  if (!this.isModified) return next();
  // generate salt
  const salt = await bcrypt.genSalt(saltFactor);
  const hash = await bcrypt.hash(this.password, salt);
  // set password to equal to hash
  this.password = hash;
  next();
});

UserSchema.methods.hashPassword = function(next) {
  // generate salt
  bcrypt.hash(this.password, saltFactor, function(err, hash) {
    if (err) return next(err);
    // set password to equal to hash
    this.password = hash;
    next();
  });
};

UserSchema.methods.verifyPass = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err) reject(err);
      resolve(isMatch);
    });
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
