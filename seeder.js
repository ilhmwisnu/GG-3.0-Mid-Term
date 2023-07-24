const mongoose = require('mongoose');
require("dotenv").config()
const mongoString = process.env.DATABASE_URL
const Video = require("./models/video")
const videoSeed = require("./seeds/video")

mongoose.connect(mongoString).then(()=>{
  console.log("Database Connected");

  seed().then(()=>{
    mongoose.disconnect()
  }).catch((err)=>{
    throw err;
  })

}).catch((err)=>{
  console.log(err);
})

async function seed() {

  
  // // Video data
  for (let i = 0; i < videoSeed.length; i++) {
    await Video.create(videoSeed[i])    
  }

  

  
}
