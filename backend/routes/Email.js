const express = require("express");
const router = express.Router();


const Email = require("../models/Newsletter");

router.get("/",async(req,res)=>{
    try{
      var response = await Email.find();
      res.json(response);
    }
    catch(error){
        res.send(error);
    }
})

router.post("/",async(req,res)=>{
    var temp = new Email({
     email: req.body.email,
    });

  try{
  const yo = await temp.save();
  console.log("meow meow");
  res.json(yo);
  }
  catch(error){
    res.send(error)
  }
})

module.exports = router;