const Video = require("../models/video");
const { default: mongoose } = require("mongoose")
const Product = require("../models/product")

const getAll = async (req, res) => {
  try {
    let data = await Video.find();

    res.json({
      message: "Success get data",
      data: data ?? [],
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id) {
      throw Error("Video id is required")
    }

    let data = await Video.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({
      message: "Success get data",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getProducts = async (req,res) => {
  try {
    let video_id = req.params.video_id

    if (!video_id) {
      throw Error("Video Id is required")
    }

    let data = await Product.find({ video_id : new mongoose.Types.ObjectId(video_id)})

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

const getComments = (req,res) => {

}

const addComment = (req,res) => {

}

module.exports = { getAll, getById, getProducts, getComments, addComment };
