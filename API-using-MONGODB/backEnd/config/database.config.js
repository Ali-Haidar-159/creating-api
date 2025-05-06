// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let mongoose = require("mongoose") ;
require("dotenv").config() ;
let chalk = require("chalk") ;

// Connect With Server : 

let DB_URL = process.env.DB_URL ;

async function connectDB ()
{
    try
    {
        await mongoose.connect(DB_URL) ;
        console.log(chalk.bgGreen("Server is connected . ")) ;
    }
    catch(error)
    {
        console.log("Server is not connected !!!") ;
        process.exit(1) ;
    }
}

// Exports Code :

module.exports = connectDB ;
