//spread operator      ...

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 6, 8];
const arr3 = [5, 10, 15, 20];

const arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4);




//array to string 
const name = ["sheetal", "vijay", "kaashvi"];
console.log(name.toString());         //seperate based on comma

console.log(typeof name.toString());       //string


//join operator
console.log(name.join(" "));              //seperate based on space



//simple searching
console.log(name.indexOf("kaashvi"));   //if found give index , if not give -1

console.log(name.includes("vijay"));     //if present gives true otherwise gives false


