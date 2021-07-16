const mongoose = require('mongoose') ;

const EventSchema = new mongoose.Schema({
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
    date:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.model('Event',EventSchema);