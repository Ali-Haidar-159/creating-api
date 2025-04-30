// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let userRoute = express.Router() ;

let { getDetails, postDetails, getDetailsSingle , deleteData } = require("../controller/user.controller");

// Routing Code : 

userRoute.get("/details" , getDetails) ;
userRoute.get("/details/:x" , getDetailsSingle) ;
userRoute.post("/details" , postDetails) ;
userRoute.delete("/details/:x" , deleteData) ;

// Exports Code :

module.exports = userRoute ;
