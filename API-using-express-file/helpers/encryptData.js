// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let crypto = require("crypto") ;

// Code of crypto : 

function hashing (str){

    if(typeof(str) === "string" && str.length > 3)
    {
        let hashValue = crypto.createHmac("sha256" , "secretKey123").update(str).digest("hex") ;

        return hashValue ;
    }
    else
    {
        return false ;
    }

}

// Exports Code :

module.exports = hashing ;
