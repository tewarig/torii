const express = require("express");
const router = express.Router();

const Event = require("../models/Event");


router.get("/",async(req,res)=>{
    try{
        const Events = await Event.find();
        res.json(Events);

    }
    catch(error){
        res.send(error);
    
    }
});

router.post("/",async(req,res)=>{
    console.log(req.body);
    const he = new Event({
      name: req.body.name,
      imageSrc: req.body.imageSrc,
      eventLink: req.body.eventLink,
      description: req.body.description,
      month: req.body.month,
      date: req.body.date,
    })
    try{
        const something = await he.save();
        res.json(something);
    }
    catch(error){
        res.send(error);
    }
});

module.exports = router;