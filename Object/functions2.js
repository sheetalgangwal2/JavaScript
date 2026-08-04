const user10 = {
    name: "sheetal",
    age: 20,
    0: 100,
    1: "vijay"
}

console.log(user10[0]);
console.log(user10[1]);






const arr = [10, 20, 30]
// {                         //this is how arr store values in the form of obj........key: value
//     0:10,
//     1:20,
//     2:30
// }



const sym = Symbol("id");
const user = {
    name: "sheetal",
    age: 20,
    0: 100,
    1: "vijay",
    [sym]: "hello world"
}

console.log(user[sym]);