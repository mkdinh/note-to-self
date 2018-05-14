const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

router.use(authRoutes);
router.use(userRoutes);

module.exports = router;
