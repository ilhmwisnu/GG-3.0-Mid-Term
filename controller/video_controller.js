const Video = require("../models/video");

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

module.exports = { getAll, getById };
