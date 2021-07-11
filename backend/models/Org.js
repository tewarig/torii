const mongoose = require('mongoose') ;

const OrgSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageSrc:{
        type:String,
        required: true
    },
    projectLink:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        "default":[],
        required:true
    },
    verified:{
        type: Boolean,
        "default":false,
        required:true
    }
})

module.exports = mongoose.model('Org',OrgSchema);