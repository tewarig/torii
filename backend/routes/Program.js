const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Program = require('../models/Program');

router.get('/',async(req,res)=>{
    try{
        const Programs = await Program.find();
        res.json(Programs);

    }
    catch{
        res.send(error);

    }
});
router.post("/",async(req,res)=>{
    try{
        const  Pro = new Program({
            name: req.body.name,
            imageSrc: req.body.imageSrc,
            eventLink: req.body.eventLink,
            description: req.body.description,
            month: req.body.month,
            youtube: req.body.youtube,
            blog:req.body.blog
        })
        const something =  await Pro.save();
        res.send(something);
     
     
    }
    catch(error){
        res.send(error);
    }
})

module.exports = router;