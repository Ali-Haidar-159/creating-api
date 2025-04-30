// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let userCollection = require("../model/user.model") ;

// Controller Code :

let getDetails =async function(req,res){

    try
    {
        let users = await userCollection.find() ;

        res.status(200).json({

            status : 200 ,
            message : "Data read successfully ." ,
            users

        }) ;
    }
    catch(error)
    {
        res.status(402).json({

            status : 402 ,
            message : "Find error to read data !!!" ,
            error : error.message 

        }) ;
    }

}

let getDetailsSingle = async function(req,res){

    try
    {

        let id = req.params.id ;

        let user = await userCollection.findById(id) ;
        // let user = await userCollection.findOne({_id : id}) ;

        if(user)
        {
            res.status(200).json({

                status : 200 ,
                message : "Data read successfully ." ,
                user

            })
        }
        else
        {
            res.status(402).json({

                status : 402 ,
                message : "User not found !!!" 
            })
        }
    }
    catch(error)
    {
        res.status(402).json({

            status : 402 ,
            message : "Find error to read data" ,
            error : error.message 

        })
    }

}

let postDetails = async function(req,res){

    try
    {

        let {name,roll,dept,gpa,languages} = req.body ;

        let newUser = new userCollection({

            name ,
            roll ,
            dept ,
            gpa ,
            languages 

        }) ;
        await newUser.save() ;

        res.status(201).json({

            success : true ,
            message : "User is created ." ,
            newUser 

        })

    }
    catch(error)
    {
        res.status(402).json({

            success : false ,
            message : "Find error to store data on DB" ,
            error : error.message  

        })
    }

}

let deleteDetails = async function(req,res){

    try
    {

        let id = req.params.id ;

        let user = await userCollection.findByIdAndDelete(id) ;
        // let user = await userCollection.findOne({_id : id}) ;

        if(user)
        {
            res.status(200).json({

                status : 200 ,
                message : "User deleted successfully" 

            })
        }
        else
        {
            res.status(402).json({

                status : 402 ,
                message : "User not found !!!" 
            })
        }
    }
    catch(error)
    {
        res.status(402).json({

            status : 402 ,
            message : "Find error to delete data" ,
            error : error.message 

        })
    }

}

// Exports Code :

module.exports = {

    getDetails ,
    postDetails ,
    getDetailsSingle ,
    deleteDetails ,

}
