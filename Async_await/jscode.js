//async await

async function greet(){                 //async always returns a promise
    //return "sheetal";


    //or

    return new Promise((resolve, reject)=>{
        reject("sheetal");
    })
}


const response = greet();
//console.log(response);

response.then((data)=>console.log(data))     //only value gives

.catch((error)=>{
    console.log("Error:", error);
})