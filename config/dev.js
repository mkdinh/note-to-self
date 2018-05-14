module.exports = {
  MONGODB_URI:
    "mongodb://developer:password@ds121950.mlab.com:21950/note-to-self",
  REDIS_URI: "redis-10678.c8.us-east-1-2.ec2.cloud.redislabs.com:10678",
  REDIS_PASS: "lcoViZTg3YbvkV1ZIDCVWFn7AgqJcOMc",
  SECRET: process.env.SECRET,
  FACEBOOK_CLIENTID: process.env.FACEBOOK_CLIENTID,
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
  FACEBOOK_CALLBACKS: "http://localhost:3000/auth/facebbok/callback",
};
