module.exports = {
  MONGODB_URI:
    "mongodb://developer:password@ds121950.mlab.com:21950/note-to-self-test",
  SECRET: "12345",
  FACEBOOK_CLIENTID: process.env.FACEBOOK_CLIENTID,
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
  FACEBOOK_CALLBACKS: "http://localhost:3000/auth/facebbok/callback",
  PORT: 3002,
};
