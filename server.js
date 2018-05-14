// initialize environment variables
//--------------------------------------------------------
require("dotenv").config();

// Import dependencies
//--------------------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("./services/passport");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");

// Application Constants
//--------------------------------------------------------
const app = express();
const keys = require("./config/keys");
const PORT = process.env.PORT || keys.PORT || 3001;
// Connect to MongoDB
//--------------------------------------------------------
mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGODB_URI);

// Configure Express app
//--------------------------------------------------------
// parsing request data into body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "sessions",
    secret: keys.SECRET,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

if (["prod", "ci"].includes(process.env.NODE_ENV)) {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  });
}
// Start server
//--------------------------------------------------------
if (!["test", "ci"].includes(process.env.NODE_ENV)) {
  const server = app.listen(PORT, () => {
    console.log("Listen to port: " + PORT);
    app.emit("started");
  });
}
// for testing
// module.exports.server = server;
module.exports = app;
