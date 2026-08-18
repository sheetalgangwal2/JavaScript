console.log("hello world start");

//code

const p1 = fetch("https://api.github.com/users");
// console.log(p1);                       //Promise { <pending> }

//promise is a obj..has 3 stage.....pending, fullfilled, rejected



// if fullfilled/rejectd

const p2 = p1.then((response)=>{
    //console.log(respone);
    //console.log(response.json());     //asynchronous

    return response.json();
})

p2.then((response)=>{
    console.log(response);    //finally the data of 30 user come
})


console.log("hello world end")