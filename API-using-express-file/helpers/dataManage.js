// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let fs = require("fs") ;
let path = require("path") ;

//data management code :  

let database = new Object () ;

let folderPath = path.join(__dirname , ".." , ".dataBase")  ;

// console.log("Folder Path: ", folderPath); 

//  here the folderName === FileName 

// write a data file 

database.create = function(folderName , file , data , callback){

    // console.log("for debug") ;

    let xyz = `${folderPath}/${folderName}/${file}.json` ;
    // console.log(xyz) ;
    
    fs.open(xyz , "wx" , function(err1,fd){
        
        if(!err1)
        {

            data = JSON.stringify(data) ;

            fs.writeFile(fd , data , function(err2){

                if(!err2)
                {
                    fs.close(fd , function(err3){

                        if(!err3)
                        {
                            callback("File write success") ;
                        }
                        else
                        {
                            callback("There is an error to close the file !") ;
                        }

                    });
                }
                else
                {
                    callback("There is an error to write the  file !") ;
                }

            });

        }
        else
        {
            callback("there is an error to open the file")
        }

    });

}

// read a data file 

database.read = function(folderName , file , callback){

    let xyz = `${folderPath}/${folderName}/${file}.json` ;

    fs.readFile(xyz , "utf8" ,  function(err,data){


        if(err)
        {
            callback(err) ;
        }
        else
        {
            callback(data) ;
        }

    });

}

// update a data file 

database.update = function(folderName , file , data , callback){

    let xyz = `${folderPath}/${folderName}/${file}.json` ;

    fs.open(xyz , "r+" , function(err1 , fd){

        if(!err1)
        {
            fs.ftruncate(fd , function(err2){

                if(!err2)
                {
                    data = JSON.stringify(data) ;

                    fs.writeFile(fd , data , function(err3){

                        if(!err3)
                        {
                            callback(200, { message: "File updated successfully" });


                        }
                        else
                        {
                            callback("there is an error to write the file !!!") ;
                        }

                    })

                }
                else
                {
                    callback("There is an error to truncate this file !!!" + err2) ;
                }

            })
        }
        else
        {
            callback("There is an error to open this file !!!") ;
        }

    })

}

// delete the file 

database.delete = function(folderName , file , callback){

    let xyz = `${folderPath}/${folderName}/${file}.json` ;

    fs.unlink(xyz , function(err){

        if(!err)
        {
            callback("File deleted successfully") ;
        }
        else
        {
            callback("Find error when deleting this file !!!") ;
        }

    });

}

// Exports Code :

module.exports = database ;
