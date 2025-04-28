// initial code 

"use strict" 
console.clear() ;

// main code 

// require all the modules , packages , objects 

let express = require("express") ;
let app = express() ;

let bodyParser = require("body-parser") ;
let productRoute = require("./router/product.router") ;
let cors = require("cors") ;

// connect with server 

app.use(bodyParser.urlencoded({extended:true})) ;
app.use(bodyParser.json()) ;

app.use(cors()) ;

app.use("/products" , productRoute) ;


app.get("/" , function(req,res){
    res.sendFile("D:/' Express.JS '/create REST-api/REST-api-2/view/home.view.html");
}) ;

app.use(function(req,res,next){
    res.status(404).json({
        status : 404 ,
        message : "Page not found" 
    }) ;
}) ;

// export code 

module.exports = app ;