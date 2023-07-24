const router = require('express').Router();
const commentRoute = require("./comment")
const videoRoute = require("./video")
const productRoute = require("./product")

router.use("/comment", commentRoute )
router.use("/product", productRoute )
router.use("/video", videoRoute )

module.exports = router