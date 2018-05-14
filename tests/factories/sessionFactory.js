const keys = require("../../config/keys");
const Buffer = require("safe-buffer").Buffer;
const Keygrip = require("keygrip");
const keygrip = new Keygrip([keys.SECRET]);

module.exports = user => {
  // create session from user id
  const sessionObject = {
    passport: {
      user: user._id.toString()
    }
  };
  // session = object => json string => Buffer => base64
  const session = Buffer.from(JSON.stringify(sessionObject)).toString("base64");
  // create unique signature from session and keygrip(secret)
  const sig = keygrip.sign("session=" + session);

  return { session, sig };
};
