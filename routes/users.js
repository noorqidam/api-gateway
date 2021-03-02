var express = require("express");
var router = express.Router();
const userHandler = require("./handler/users");

router.post("/register", userHandler.register);

module.exports = router;
