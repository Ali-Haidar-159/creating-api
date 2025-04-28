// initial code 

"use strict" 
console.clear() ;

// main code 

// require all the modules , packages , objects 

let express = require("express") ;
let route = express.Router() ;

let {getProducts, postProducts, updateProduct, deleteProduct, getSingleProduct, productShowing} = require ("../controller/product.controller") ;

// connect with server 

route.get("/" , getProducts) ;
route.get("/:id",getSingleProduct) ;
route.post("/",postProducts) ;
route.put("/:id",updateProduct) ;
route.delete("/:id",deleteProduct) ;

// export codes 

module.exports = route ;