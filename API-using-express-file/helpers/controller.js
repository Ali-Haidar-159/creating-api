// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let database = require("./dataManage") ;
let hashing = require("./encryptData") ;

// Request-Response-Cycle : 

let allController = new Object() ;

allController.sampleFunction = function(requestAllThings , callBack){

    callBack(200 , {message : "This is sample code !"}) ;

}

allController.notFoundFunction = function(requestAllThings , callBack){

    callBack(404 , {message : "Sorry !!! Page not found"}) ;

}

allController.userFunction = function(requestAllThings , callBack){

    if(requestAllThings.method === "get")
    {
        // console.log(requestAllThings) ;
        allController._users.get(requestAllThings , callBack) ;
    }
    else if(requestAllThings.method === "post")
    {
        allController._users.post(requestAllThings , callBack) ;
    }
    else if(requestAllThings.method === "put")
    {
        allController._users.put(requestAllThings , callBack) ;
    }
    else if(requestAllThings.method === "delete")
    {
        allController._users.delete(requestAllThings , callBack) ;
    }
    else
    {
        callBack(405 , "message : Request is not accepted !!!") ;
    }

}


allController._users = new Object () ;


allController._users.get = function(requestAllThings , callBack){

    let mobile = requestAllThings.queryParameter.mobile ;

    if(typeof(mobile)==="string" && mobile.length===11)
    {
        
        database.read("users" , mobile , function(result){

            try
            {
                result = result = JSON.parse(result) ;
                delete result.password ;
                callBack(200,result) ;

            }
            catch(err)
            {
                callBack(200,result) ;
            }            

        });

    }
    else
    {
        callBack(400 , {message : "Invalid mobile number !!!"}) ;
    }

}

allController._users.post = function(requestAllThings , callBack){
    
    let body = requestAllThings.body ;

    // console.log(requestAllThings.body.firstName) ;

    let firstName = typeof(body.firstName) === "string" && body.firstName.trim().length > 0 ? body.firstName : false ;
    let lastName = typeof(body.lastName) === "string" && body.lastName.trim().length > 0 ? body.lastName : false ;
    let mobile = typeof(body.mobile) === "string" && body.mobile.trim().length === 11 ? body.mobile : false ;
    let password = typeof(body.password) === "string" && body.password.trim().length > 3 ? body.password : false ;
    let toAgree = typeof(body.toAgree) === "boolean" ? body.toAgree : false ;

    let userDetails = {

        firstName ,
        lastName ,
        mobile ,
        password : hashing(password) ,
        toAgree

    }

    // console.log(userDetails) ;

    if(firstName && lastName && mobile && password && toAgree)
    {
        database.read("users" , mobile , function(err,data){

            if(err)
            {

                database.create("users", mobile , userDetails , function(result){

                    callBack(201 , {message : result}) ;

                } )

            }
            else
            {
                callBack(400 , {message : "user already exists"});
            }

        })
    }
    else
    {
        callBack(400 , {message : "Your request is not valid ."}) ;
    }

}


allController._users.put = function(requestAllThings , callBack){
    
    // console.log("from controller  : ") ;
    // console.log(requestAllThings) ;


    let mobile = requestAllThings.queryParameter.mobile ;

    // console.log(mobile) ;

    if(typeof(mobile) === "string" && mobile.length===11)
    {

        let data = requestAllThings.body ; 


        database.update("users" , mobile , data , function(result){

            callBack(result) ;

        })

    }
    else
    {
        callBack(400 , {message : "Invalid mobile number !!!"}) ;
    }

}


allController._users.delete = function(requestAllThings , callBack){
    
}


// Exports Code :

module.exports = allController ;
