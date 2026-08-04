const user = {
    name: "sheetal",
    age: 19,
    marks: 97,
    // greeting: function(){
    //     console.log(`hello world ${this.name}`);
    // },
    address: {
        city: "indore",
        state: "mp",
    }
}

//function call

// user.greeting()

// const va = user.greeting();            //or
// console.log(va);                  //undefined appear



console.log(user.address.city);



//shallow copy

// const user2 = {...user};

// user2.name = "mohan";
// user2.address.city = "dwarka";          //in city user2 changes add of user coz it handles only level 1 not nested


// console.log(user);
// console.log(user2);




//deep copy

const user2 = structuredClone(user);
user2.address.city = "dwark"
console.log(user);
