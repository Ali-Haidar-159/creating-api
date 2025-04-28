// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let {sampleFunction, notFoundFunction, userFunction} = require("./controller") ;

// Request-Response-Cycle : 

let allRoutes = new Object () ;

allRoutes.routes = {

    sample : sampleFunction ,
    notFound : notFoundFunction ,
    user : userFunction

}


// Exports Code :

module.exports = allRoutes ;
