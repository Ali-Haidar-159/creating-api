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

let portNumber = process.env.PORT ;
let consoleDesign = chalk.bgRed.bold.italic ;

app.listen(portNumber , async function(){

    console.log(consoleDesign(`Server is running at http://localhost:${portNumber} ...`)) ;

    await connectDB()

}) ;

// Exports Code :


