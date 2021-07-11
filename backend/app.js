const express = require('express');
const mongoose = require('mongoose');



const url = 'mongodb://localhost:27017/toriii-api'
const app = express() ;


mongoose.connect(url ,{useNewUrlParser: true})
const connection = mongoose.connection

connection.on('open' , function (){
    console.log('connected....');
})

 app.use(express.json());

const OrginationRoute = require('./routes/Org');
app.use('/org',OrginationRoute);


app.listen( "9000" ,function(){
    console.log('app is listening....');
})