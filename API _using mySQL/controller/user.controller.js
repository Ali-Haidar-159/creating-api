// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let {PrismaClient} = require("@prisma/client") ;

let pc = new PrismaClient () ;

//Controller Code : 

let getProducts = async function(req,res){

    try
    {
        let products = await pc.productDetails.findMany() ;

        res.status(200).json({

            success : true ,
            products 

        });
    }
    catch(err)
    {
        console.log(err) ;
        res.status(400).json({

            status : 400 ,
            message : "Find error to read all data !" ,
            error : err

        }) ;
    }
    finally
    {
        await pc.$disconnect() ;
    }


}

let getSingleProduct = async function(req,res){

    try
    {
        let id = req.params.id ;

        let product = await pc.productDetails.findUnique({

            where : {
                id : id 
            }

        }) ;

        res.status(200).json({

            success : true ,
            product 

        });
    }
    catch(err)
    {
        console.log(err) ;
        res.status(400).json({

            status : 400 ,
            message : "Find error to read single data !" ,
            error : err

        }) ;
    }
    finally
    {
        await pc.$disconnect() ;
    }


}


let postProducts = async function(req,res){

    try
    {

        let {name,price,type} = req.body ;
        let {v4 : uuidv4} = require("uuid") ;
        price = Number(price) ;

        let newProduct = await pc.productDetails.create({

            data : {
                id : uuidv4() ,
                name : name ,
                price : price ,
                type : type ,
            }

        })

        res.status(201).json({

            success : true ,
            newProduct 

        });


    }
    catch(err)
    {
        console.log(err) ;
        res.status(400).json({

            status : 400 ,
            message : "Find error to post data !" ,
            error : err

        }) ;
    }
    finally
    {
        await pc.$disconnect() ;
    }

}


let updateProduct = async function(req,res){

    try
    {
        let id = req.params.id ;
        let {name,price,type} = req.body ;
        price = Number(price) ;

        let updatedProduct = await pc.productDetails.update({

            where : {
                id : id 
            } ,
            data : {
                name : name ,
                price : price ,
                type : type
            }

        }) ;

        res.status(200).json({

            success : true ,
            updated : true ,
            updatedProduct 

        });
    }
    catch(err)
    {
        console.log(err) ;
        res.status(400).json({

            status : 400 ,
            message : "Find error to update data !" ,
            error : err

        }) ;
    }
    finally
    {
        await pc.$disconnect() ;
    }


}


let deleteProduct = async function (req,res){

    try
    {
        let id = req.params.id ; 

        let deletedProduct = await pc.productDetails.delete({

            where : {
                id : id 
            }

        }) ;

        res.status(200).json({

            success : true , 
            deleted : true , 
            deletedProduct

        }) ;

    }
    catch(err)
    {
        console.log(err) ;
        res.status(400).json({

            status : 400 ,
            message : "Find error to delete data !" ,
            error : err

        }) ;
    }
    finally
    {
        await pc.$disconnect() ;
    }

}


// Exports Code :

module.exports = {

    getProducts ,
    getSingleProduct ,
    postProducts ,
    updateProduct ,
    deleteProduct ,

}
