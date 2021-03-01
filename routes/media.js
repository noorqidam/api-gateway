var express = require("express");
var router = express.Router();
const mediaHandler = require("./handler/media");

router.post("/", mediaHandler.create);
router.get("/", mediaHandler.getAll);

module.exports = router;
