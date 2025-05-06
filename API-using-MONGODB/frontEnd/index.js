// initial code 
"use strict"
console.clear() ;

// main code 

function apiCalling ()
{
    fetch("http://localhost:3000/details" , {

        method : "GET" ,
        headers : {
            "content-type" : "application/json" 
        }

    })
    .then(function(r1){

        if(r1.ok)
        {
            return r1.json() ;
        }
        else
        {
            return new Error("something wrong!!!");
        }

    })
    .then(function(r2){

        // console.log(r2) ;
        printAllData(r2.users) ;

    })
    .catch(function(err){

        console.log(err) ;

    })
}

apiCalling() ;

function printAllData (data)
{
    let copyData = data ;

    let xyz = document.getElementById("xyz") ;

    // console.log(copyData);

    // let i = 1 ; 

    // copyData.forEach(function(item){

    //     let name = item.name || null ;
    //     let id = item.id || null ;
    //     let dept = item.dept || null ;
    //     let gpa = item.gpa || null ;

    //     console.log(`For user[${i}] : `) ;
    //     i++ ;
    //     console.log("Name : " + name) ;
    //     console.log("ID : " + id) ;
    //     console.log("Department : " + dept) ;
    //     console.log("GPA : " + gpa) ;

    // });

    // console.log(copyData.length) ;

    for(let item of copyData)
    {
        xyz.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.id}</td>
                        <td>${item._id}</td>
                        <td>${item.dept}</td>
                        <td>${item.gpa}</td>
                        <td><button data-id=${item._id}> X </button></td>
                    </tr>
                        `;
    }

}

let tbody = document.getElementById("xyz");

tbody.addEventListener("click", function(event){
    if (event.target.tagName === "TD") {
        console.log("You clicked on:", event.target.textContent);
    }
    else if(event.target.tagName === "BUTTON")
    {
        event.target.closest("tr").remove();

        //delete from DB 

        fetch(`http://localhost:3000/details/${event.target.dataset.id}` , {

            method : "DELETE" ,
            headers : {
                "content-type" : "application/json" 
            }
    
        })
        .then(function(r1){
    
            if(r1.ok)
            {
                return r1.json() ;
            }
            else
            {
                return new Error("something wrong!!!");
            }
    
        })
        .then(function(r2){
    
            console.log("Deleted Data ... ") ;
    
        })
        .catch(function(err){
    
            console.log(err) ;
    
        })
        

    }
});
