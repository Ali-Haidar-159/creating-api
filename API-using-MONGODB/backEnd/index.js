// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let app = require("./app") ;

let chalk = require("chalk") ;
require("dotenv").config() ;
let connectDB = require("./config/database.config") ;

// Connect With Server : 

let port = process.env.PORT || 5000 ;
let consoleDesign = chalk.bold.italic.bgRed ;

app.listen(port ,async function(){

    console.log(consoleDesign(`Server is running at http://localhost:${port} ...`)) ;
    await connectDB() ;

}) ;


// Exports Code :


