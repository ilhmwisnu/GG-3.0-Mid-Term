const router = require('express').Router();
const productController = require("../controller/product_controller")

router.get("/:video_id", productController.getVideoProduct )

module.exports = router