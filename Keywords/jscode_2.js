'use strict'

function greet(){
    console.log(`hi ${this.name}`);
}


function incrementAge(value, name){

    this.age+=value;
    this.name= name;

    console.log(this.age);
    console.log(this.name);
    
}

const user = {
    name:"sheetal",
    age:20,
}


const user2 = {
    name:"naina",
    age:30,
}


// greet.call(user);
// greet.call(user2);

// incrementAge.call(user2,15, "vijay");

// incrementAge.apply(user2,[10, "vijay"]);


//bind
const incr = incrementAge.bind(user2,[10, "vijay"]);
console.log(incr);
