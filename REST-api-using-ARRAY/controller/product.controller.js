// initial code 

"use strict" 
console.clear() ;

// main code 

// require all the modules , packages , objects 

let products = require("../model/productList.model") ;
let {v4 : uuidv4} = require("uuid") ;

// connect with server 

let getProducts = function(req,res){
    res.status(200).json(products) ;
}

let getSingleProduct = function(req,res){
    let id = req.params.id ;

    let selectedProduct = products.find(function(item){
        return item.id == id ;
    }) ;

    if(selectedProduct)
    {
        res.status(200).json(selectedProduct) ;
    }
    else
    {
        res.status(404).json({
            status : 404 ,
            message : "product not found"
        })
    }
}

let postProducts = function(req,res){
    let {name,price,size} = req.body ;

    let newProduct = {
        id : uuidv4() ,
        name : name ,
        price : price ,
        size : size
    }

    products.push(newProduct) ;

    res.status(201).json(products) ;

}

let updateProduct = function(req,res){
    let id = req.params.id ;

    let {name,price,size} = req.body ;

    let selectedProduct =  products.find(function(item){
        return item.id == id ;
    }) ;

    if(selectedProduct)
    {
        selectedProduct.name = name ;
        selectedProduct.price = price ;
        selectedProduct.size = size ;

        res.status(200).json(products) ;
    }
    else
    {
        res.status(404).json({
            status : 404 ,
            message : "Product not found"
        }) ;
    }
}

let deleteProduct = function(req,res){
    let id = req.params.id ;

    products = products.filter(function(item){
        return item.id !== id ;
    }) ;

    res.status(200).json(products) ;
}

// export codes 


module.exports = {
    getProducts ,
    postProducts ,
    updateProduct ,
    deleteProduct,
    getSingleProduct
}