const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
const userHandler = require("./handler/users");

router.post("/register", userHandler.register);
router.post("/login", userHandler.login);
router.put("/", verifyToken, userHandler.update);

module.exports = router;
