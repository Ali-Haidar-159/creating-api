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
            message : "name is required !!!"
        }
    } ,

    id : {

        type : String ,
        required : [true , "ID is required !!!"]

    } ,
    dept : {

        type : String ,
        required : {

            value : true ,
            message : "Department is required !!!"

        }

    } ,
    gpa : {

        type : Number ,
        required : [true , "GPA is required !!!"]

    }

}) ;

// Creating Collection : 

let userCollection = mongoose.model("userDetails" , userSchema) ;

// Exports Code :

module.exports = userCollection ;
