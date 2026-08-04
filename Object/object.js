//object

//key valu apair

const user = {
    name: "sheetal",
    age: 19,
    marks: 97,
    //home add: "indore"         error coz of space
    "home add": "indore"

}

//CRUD  create read update delete
console.log(user);

console.log(user.age);
console.log(user.name);

//add  
user.aadhar = 1234
console.log(user.aadhar);
console.log(user);


//update 
user.age = 24;
console.log(user);

//delete 
delete user.marks;
console.log(user);



//access
console.log(user["name"]);
console.log(user["age"]);





const user2 = user;
user2.age = 30;

console.log(user);



//important
console.log(Object.keys(user));            //creates array and put all values/keys
console.log(Object.values(user));
console.log(Object.entries(user));



// for(let num in user){
//     console.log(num);
// }

for (let keys in user){
    console.log(keys, user[keys]);               //not recommended
}