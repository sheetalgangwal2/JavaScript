const j1 = {
    name : "sheetal",
    age : 19,
    address: "indore",
    c: undefined               //ignored
}


//converting j1 into json

const jsonformat = JSON.stringify(j1);

console.log(jsonformat);





//json format            (string)            no comma at end
const jsonf = `{
    "name": "vijay",
    "age":20,
    "address":"indore"          
}`;


//convert josn in js object
const jsObject = JSON.parse(jsonf);

console.log(jsObject);




//creating promise

const p1 = new Promise((resolve, reject)=>{

    resolve({
        name:"kaashvi",
        age:30,
    });
})


p1.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})
    
console.log(p1);