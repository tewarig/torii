const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const dot = require('dotenv').config();



const app = express() ;

const port = process.env.PORT || 4003;



mongoose.connect( process.env.DBURL   ,  { useFindAndModify: false   ,useNewUrlParser: true }
    ).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit();
    });

 app.use(express.json());

const OrginationRoute = require('./routes/Org');
app.use('/org',cors(),OrginationRoute);

const EventRoute = require("./routes/Event");
app.use("/event",cors(),EventRoute);

const ProgramRoute = require("./routes/Program");
app.use("/program",cors(), ProgramRoute) ; 


const DataRoute = require("./routes/Data");
app.use("/data",cors(),DataRoute);

const newsLetter = require("./routes/Email");
app.use("/email",cors(),newsLetter);

app.listen( port ,function(){
    console.log('app is listening....');
})