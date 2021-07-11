const express = require('express');
const router  = express.Router();

const Org = require("../models/Org");

router.get('/', async(req,res) =>{
  try{
   const Orgs = await Org.find();
   res.json(Orgs);
  }
  catch(error){
      res.send(error);
  }

});


router.post('/',async(req,res) => {
    // console.log(req);
    const org = new Org({
        name: req.body.name,
        imageSrc: req.body.imageSrc,
        projectLink: req.body.projectLink,
        description: req.body.description,
        tags: req.body.tags
    })
    console.log(org);

    try{
      const someThing = await org.save();
      res.json(someThing);
    }catch(error){
     console.log(error);
    }
})




module.exports = router ;