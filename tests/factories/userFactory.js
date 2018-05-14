const { User } = require("../../models");

async function userFactory() {
  // clear out database before create new ones
  await User.remove({});
  try {
    const user = await User.create({
      username: "developer",
      password: "I loves cats",
    });
    // hold reference of old password for authentication
    user._password = "I loves cats";

    return user;
  } catch (err) {
    return await userFactory();
  }
}

module.exports = userFactory;
