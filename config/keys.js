module.exports = (() => {
  switch (process.env.NODE_ENV) {
    case "dev":
      return require("./dev");
    case "test":
      return require("./test");
    case "ci":
      return require("./ci");
    default:
      return require("./prod");
  }
})();
