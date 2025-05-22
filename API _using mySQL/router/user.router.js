// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let userRoute = express.Router() ;

let { getProducts, getSingleProduct, postProducts, updateProduct, 
    deleteProduct } = require("../controller/user.controller");

//Routing Code : 

userRoute.get("/products" , getProducts) ;
userRoute.get("/products/:id" , getSingleProduct) ;

userRoute.post("/products" , postProducts) ;

userRoute.put("/products/:id" , updateProduct) ;
userRoute.delete("/products/:id" , deleteProduct) ;

// Exports Code :

module.exports = userRoute ;
