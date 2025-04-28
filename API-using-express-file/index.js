// initial code 

"use strict" 
console.clear() ;

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let http = require("http") ;
require("dotenv").config() ;

let routeHandler = require("./helpers/routeHandeler") ;
let database = require("./helpers/dataManage") ;

// Create Server : 

let app = new Object() ;

// data file create 

// database.create("test" , "details" , {name : "ali Haidar" , age : 24 , dept : "CSE"} , function(result){

//     console.log(result) ;

// })

// // data file read 

// database.read("data1" , "details" , function(result){
//     console.log(result) ;
// }) ;

// updating the file 

// database.update("test" , "details" "fahmida tabassum antora" , function(result){

//     console.log(result) ;

// })

// delete the file 

// database.delete("test" , "details" , function(result){

//     console.log(result) ;

// })


// creating server 

app.createServer = function(){

    let myServer = http.createServer(app.routeHandler) ;

    let PORT = process.env.PORT ;
    
    myServer.listen(PORT , function(){

        console.log(`My server is running at http://localhost:${PORT}...`);

    });

}

// Request-Response-Cycle : 

app.routeHandler = routeHandler.reqRes ;

// call the function to create server 

app.createServer() ;

// Exports Code : 

module.exports = app ;