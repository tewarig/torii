const mongoose = require('mongoose');
const DataScheme = new mongoose.Schema({
   data:{
       type:String,
      required: true
   }
})

module.exports = mongoose.model("Data",DataScheme);