// initial code 

"use strict" 
console.clear() ;

// main code 

// require all the modules , packages , objects 

let app = require("./app") ;
let chalk = require("chalk") ;

// connect with server  

let portNUmber = 3000 ;

app.listen(portNUmber,function(){
    console.log(chalk.bgRed.white.bold(`Server is running at http://localhost:3000`)) ;
}) ;

// export codes 