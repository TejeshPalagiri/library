var express = require('express');
var app = express();
const mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var bodyparser = require('body-parser');

const port = 3000;
const route = require('./routes/route')

//connecting to db

mongoose.connect('mongodb://localhost:27017/library');

mongoose.connection.on("connected",()=>{
    console.log("Connected to database successfully");
});

mongoose.connection.on("error",(err)=>{
    if(err){
        console.log("Error in database:"+err);
    }
});

// //middlewares
app.use(cors());

// //body parsers
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/api', route);




// //static files
app.use(express.static(path.join(__dirname, 'public')));

//server test
app.get('/',(req,res)=>{
    res.send("Homepage");
    console.log("Home page");
});



app.listen(port,()=>{
    console.log("Server running on port "+ port);
});
