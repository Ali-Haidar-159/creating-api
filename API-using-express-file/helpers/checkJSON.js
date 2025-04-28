// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 


//check the data is json or not : 

let utility = new Object() ;

utility.checkJSON = function(jsonString){

    try
    {
        let jsonOutput ; 

        jsonOutput = JSON.parse(jsonString) ;
        return jsonOutput ;

    }
    catch(err)
    {
        jsonOutput =  {message : "not a valid JSON !!!"} ;
        return jsonOutput ;
    }



}

// Exports Code :

module.exports = utility ;
