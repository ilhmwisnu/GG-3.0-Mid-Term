const router = require('express').Router();
const productController = require("../controller/product_controller")

router.get("/product/:video_id", productController.getVideoProduct )

module.exports = router