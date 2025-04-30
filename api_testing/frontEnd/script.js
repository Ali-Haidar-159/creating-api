// initial code 
"use strict"
console.clear() ;

// main code 

let allData = document.getElementById("allData") ;

function callingAPI(endpoint, shouldPrint = true) {
    return fetch(endpoint, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    .then(function (r1) {
        if (r1.ok) {
            return r1.json();
        } else {
            throw new Error("Something Wrong !!!");
        }
    })
    .then(function (r2) {
        if (shouldPrint) {
            printData(r2);
        }
        return r2;
    })
    .catch(function (error) {
        console.log(error);
    });
}


callingAPI("http://localhost:3000/details") ;

function printData (data)
{
    let copyData = data.users ;

    // console.log(copyData) ;

    let allData = document.getElementById("allData") ;

    copyData.forEach(function(item){

        allData.innerHTML += `

                    <tr id="${item._id}">
                        <td>${item.name}</td>
                        <td>${item.roll}</td>
                        <td>${item.dept}</td>
                        <td>${item.gpa}</td>
                        <td>${item.languages}</td>
                        <td><button data-id="${item._id}" id="btn">X</button></td>
                    </tr>

                        `

    })

}

function deleteData (id)
{
    fetch(`http://localhost:3000/details/${id}` , {

        method : "DELETE" 
    })
    .then(function(r1){

        if(r1.ok)
        {
            return r1.json() ;
        }
        else
        {
            throw new Error("find error to delete data") ;
        }

    })
    .then(function(r2){

        console.log("Data deleted successfully.") ;

    })
    .catch(function(error){
        console.log(error) ;
    })
}

function postData (data)
{
    fetch(`http://localhost:3000/details` , {

        method : "POST" ,
        headers : {
            "content-type" : "application/json" 
        } ,
        body : JSON.stringify(data) 
    })
    .then(function(r1){

        if(r1.ok)
        {
            return r1.json() ;
        }
        else
        {
            throw new Error("find error to post data") ;
        }

    })
    .then(function(r2){

        console.log("Data inserted successfully.") ;

    })
    .catch(function(error){
        console.log(error) ;
    })
}

allData.addEventListener("click" ,async function(e){

    // console.log("you clicked on : " , e.target.innerText) ;
    if(e.target.tagName === "BUTTON")
    {
        let id = e.target.dataset.id ;
        deleteData(id) ;
        e.target.closest("tr").remove() ;
    }
    else
    {
        // console.dir(e.target.parentNode.id) ;

        try
        {
            let user = await callingAPI(`http://localhost:3000/details/${e.target.parentNode.id}` , false) ;

            if(user)
            {
                // console.log(user.user) ;
                let xyz = user.user ;

                let newUser = {

                    name : xyz.name ,
                    roll : xyz.roll ,
                    dept : xyz.dept ,
                    gpa : xyz.gpa ,
                    languages : xyz.languages

                }
                postData(newUser) ;
            }
            else
            {
                console.log("User not found.") ;
            }
        }
        catch(error)
        {
            console.log({

                message : "Find error to store data " ,
                error : error
                
            })
        }

        

    }

}) ;