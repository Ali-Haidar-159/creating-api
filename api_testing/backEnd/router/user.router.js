// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let userRoute = express.Router() ;

const { getDetails, postDetails, getDetailsSingle, deleteDetails } = require("../controller/user.controller");

// Routing Code :

userRoute.get("/details" , getDetails) ;
userRoute.get("/details/:id" , getDetailsSingle) ;
userRoute.post("/details" , postDetails) ;
userRoute.delete("/details/:id" , deleteDetails) ;

// Exports Code :

module.exports = userRoute ;
