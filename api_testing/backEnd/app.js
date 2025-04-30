// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let morgan = require("morgan") ;
let cors = require("cors") ;
let userRoute = require("./router/user.router");

// Connect With Server : 

app.use(express.urlencoded({extended:true})) ;
app.use(express.json()) ;

app.use(morgan("dev")) ;
app.use(cors()) ;

app.use(userRoute)

// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).send("HOME page") ;

});

// handle the route error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message : "Page not found !!!"

    });

});

// handle the server error 

app.use(function(err,req,res,next){

    res.status(500).json({

        status : 500 ,
        message : "Find Server Error !!! ",
        error : err.message

    });

});

// Exports Code :

module.exports = app ;
