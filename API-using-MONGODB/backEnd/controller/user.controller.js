// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let userCollection = require("../model/user.model") ;

// Controller Codes: 

let getDetails =async function(req,res){

    try
    {

        let users = await userCollection.find() ;

        res.status(200).json({

            success : true ,
            message : "Data read successfully ." ,
            users

        }) ;

    }
    catch(error)
    {
        res.status(401).json({

            status : 401 ,
            message : "Find error to read data from DB !!!" ,
            error : error.message 

        })
    }

}

let getDetailsSingle =async function(req,res){

    try
    {

        let _id = req.params.x ; 

        let users = await userCollection.findOne({_id : _id}) ;

        res.status(200).json({

            success : true ,
            message : "Data read successfully ." ,
            users

        }) ;

    }
    catch(error)
    {
        res.status(401).json({

            status : 401 ,
            message : "Find error to read data from DB !!!" ,
            error : error.message 

        })
    }

}

let postDetails = async function(req,res){

    try
    {
        let {name,id,dept,gpa} = req.body ;

        let newUser = new userCollection({

            name , 
            id , 
            dept ,
            gpa

        }) ;
        await newUser.save() ;

        res.status(201).json({

            success : true ,
            message : "New user is created ." ,
            newUser 

        });

    }
    catch(error)
    {
        res.status(401).json({

            status : 401 ,
            message : "Find error to store data on DB !!!" ,
            error : error.message 

        })
    }
}

let deleteData = async function(req,res){
	
	try
    {

        let _id = req.params.x ; 

        let users = await userCollection.deleteOne({_id : _id}) ;

        res.status(200).json({

            success : true ,
            message : "Data deleted successfully ." 

        }) ;

    }
    catch(error)
    {
        res.status(401).json({

            status : 401 ,
            message : "Find error to read data from DB !!!" ,
            error : error.message 

        })
    }
	
	
	
}

// Exports Code :

module.exports = {

    getDetails ,
    getDetailsSingle ,
    postDetails ,
	deleteData,

}
