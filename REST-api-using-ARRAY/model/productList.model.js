// initial code 

"use strict" 
console.clear() ;

// main code 

// require all the modules , packages , objects 

let {v4 : uuidv4} = require("uuid") ;

// connect with server 


let products = [
    {
        id : uuidv4() ,
        name : "mobile" ,
        price : 5000 ,
        size : "XL"
    },

    {
        id : uuidv4() ,
        name : "laptop" ,
        price : 75000 ,
        size : "L"
    },

    
    {
        id : uuidv4() ,
        name : "tab" ,
        price : 25000 ,
        size : "M"
    }
    ,

    
    {
        id : uuidv4() ,
        name : "charger" ,
        price : 250 ,
        size : "L"
    }
    ,

    
    {
        id : uuidv4() ,
        name : "penDrive" ,
        price : 220 ,
        size : "M"
    }

    
]


// export codes 

module.exports = products ;