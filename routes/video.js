const router = require('express').Router();
const videoController = require("../controller/video_controller")

router.get("/", videoController.getAll )

router.get("/:id", videoController.getById )

module.exports = router