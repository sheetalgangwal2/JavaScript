//Flattening the array

const arr = [10, 30, 50,[40, 90,[23, 56, 45] ,11 ] , 80];

console.log(arr);
console.log(arr[3]);

console.log(arr[3][1]);       //to get 90

console.log(arr[3][2][1]);     //to get 56



//to get in single 
const a = arr.flat(Infinity)         //()level mention
console.log(a);