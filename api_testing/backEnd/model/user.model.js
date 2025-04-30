// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let mongoose = require("mongoose") ;

// Creating Schema : 

let userSchema = new mongoose.Schema({

    name : {

        type : String ,
        required : {
            value : true ,
            message : "name should be required !!!"
        }
    },
    roll : {

        type : Number ,
        required : [true , "Roll should be required !!!"]

    } ,

    dept : {

        type : String ,
        required : {
            value : true ,
            message : "department should be required !!!" 
        }

    } ,

    gpa : {

        type : Number ,
        required : [true , "gpa should be required !!!"] 

    } ,

    languages : {
        type : [String] 
    }


})

// Creating Collection OR Model : 

let userCollection = mongoose.model("user-details" , userSchema) ;

// Exports Code :

module.exports = userCollection ;
