// initial code 

"use strict" 
console.clear() ;

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let url = require("url") ;
let {StringDecoder} = require("string_decoder") ;
let allRouts = require("./routing") ;
let utility = require("./checkJSON") ;

// Request-Response-Cycle : 

let routeHandler = new Object() ;

routeHandler.reqRes = function(req,res){

    let parsedURL = url.parse(req.url,true) ;
    let path = parsedURL.pathname ;
    let trimmedPath = path.replace(/^\/+|\/+$/g , "")

    let queryParameterObj = parsedURL.query ;
    let headersData = req.headers ;
    let requestMethod = req.method.toLowerCase() ;

    let requestAllThings = {

        path : path ,
        trimmedPath : trimmedPath ,
        queryParameter : queryParameterObj ,
        headers : headersData ,
        method : requestMethod ,

    }

    let decoder = new StringDecoder("utf-8") ;
    let fullData = "" ;



    req.on("data" , function(chunk){

        fullData += decoder.write(chunk) ;

    }) ;

    req.on("end" , function(){

        fullData +=decoder.end() ;
        
        if(fullData)
        {
            // requestAllThings.body = JSON.parse(fullData) ; 
            requestAllThings.body = utility.checkJSON(fullData) ; 
            // console.log(fullData) ;
        }

        // console.log("from routeHandler : ") ;
        // console.log(requestAllThings) ;

        let endPoint = allRouts.routes[trimmedPath] ? allRouts.routes[trimmedPath] : allRouts.routes["notFound"] ;

        endPoint(requestAllThings, function(statusCode, payLoad) {

            statusCode = typeof(statusCode) === "number" ? statusCode : 500;
            payLoad = typeof(payLoad) === "object" ? payLoad : {};
        
            let payLoadString = JSON.stringify(payLoad);
        
            res.setHeader("content-type", "application/json");
            res.writeHead(statusCode);
            res.write(payLoadString);
            res.end();
        
        }); 


    });

}

// Exports Code : 

module.exports = routeHandler ;
