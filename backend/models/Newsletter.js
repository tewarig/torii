const mongoose = require('mongoose');


const email = new mongoose.Schema({
    email:{
        type: String,
        required: true
    }

})
module.exports = mongoose.model("Email",email)