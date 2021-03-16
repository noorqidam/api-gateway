const express = require("express");
const router = express.Router();
const lessonHandler = require("./handler/lessons");

router.post("/", lessonHandler.create);
router.get("/", lessonHandler.getAll);
router.put("/:id", lessonHandler.update);
router.delete("/:id", lessonHandler.destroy);
router.get("/:id", lessonHandler.get);

module.exports = router;
