const router = require('express').Router();

router.get("/", (req,res)=>{
  res.json({
    message : "Ini Route Video"
  })
})

module.exports = router