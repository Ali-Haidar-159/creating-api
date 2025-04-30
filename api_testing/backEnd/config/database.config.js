// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let mongoose = require("mongoose") ;

let chalk = require("chalk") ;
require("dotenv").config() ;

// Connect With Server : 

async function connectDB ()
{
    try
    {

        let DB_URL = process.env.DB_URL ;

        await mongoose.connect(DB_URL) ;
        console.log(chalk.bgGreen("Database is connected successfully .")) ;

    }
    catch(error)
    {
        console.log({

            message : "Find error to connect DB !!!" ,
            error : error.message

        })
    }
}


// Exports Code :

module.exports = connectDB ;
