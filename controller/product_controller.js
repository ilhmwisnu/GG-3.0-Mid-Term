const { default: mongoose } = require("mongoose")
const Product = require("../models/product")

const getVideoProduct = async (req,res) => {
  
  try {
    let video_id = req.params.video_id

    if (!video_id) {
      throw Error("Video Id is required")
    }

    let data = await Product.find({ video_id : mongoose.Types.ObjectId(video_id)})

    res.json({
      message : "Success get data",
      data : data ?? []
    })

  } catch (error) {
    res.status(400).json({
      message : error.message,
    })
  }

}

module.exports = { getVideoProduct }