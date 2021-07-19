const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');



const url = 'mongodb+srv://gaurav:gaurav@cluster0.ztzjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express() ;

const port = process.env.PORT || 4000;


// mongoose.connect(url ,{useNewUrlParser: true  ,useUnifiedTopology: true })
// const connection = mongoose.connection

// connection.on('open' , function (){
//     console.log('connected....');
// })

mongoose.connect( url,  { useFindAndModify: false   ,useNewUrlParser: true }
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

app.listen( port ,function(){
    console.log('app is listening....');
})