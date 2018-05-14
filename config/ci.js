module.exports = {
  MONGODB_URI: "mongodb://127.0.0.1:27017/todo_ci",
  REDIS_URI: "redis://127.0.0.1:6379",
  REDIS_PASS: "lcoViZTg3YbvkV1ZIDCVWFn7AgqJcOMc",
  SECRET: process.env.SECRET,
  FACEBOOK_CLIENTID: process.env.FACEBOOK_CLIENTID,
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
  FACEBOOK_CALLBACKS: "http://localhost:3000/auth/facebbok/callback",
};
