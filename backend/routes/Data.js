const express = require('express');
const router = express.Router();

const Data = require("../models/Data");

router.get("/",async(req,res)=>{
    try{
      var response = await Data.find();
      res.json(response);

    }
    catch(error){
        res.send(error);
    }
})
router.post("/",async(req,res)=>{
  var yo = new Data({
      data: req.body.data, 
  })
  try{
  const something = await yo.save();
  res.json(something);
  }
  catch(error){
  console.log(error);
  }

});

module.exports = router;