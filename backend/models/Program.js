const mongoose = require("mongoose");

const Program = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageSrc:{
        type:String,
        required: true
    },
    eventLink:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    youtube:{
        type:Array,
        "default":[],
        required:true
    },
    blog:{
        type:Object,
       name:{
         type: String

       },
       link:{
        type: String
       }
    }
    
    
})

module.exports = mongoose.model("Program", Program);