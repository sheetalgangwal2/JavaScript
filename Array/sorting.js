//sorting          arrange in ascending order

const name = ["sheetal", "vijay", "kaashvi", "rohit", "aakash"];

name.sort();        //ascending order
console.log(name);


const names = ["alice", "Bob", "Charlie"]
names.sort();
console.log(names);           //alice is at lat coz of small 'a'......value of ascii table



//descending order

name.reverse();
console.log(name);


names.reverse();
console.log(names);



const a = [101, 90, 80, 32, 91];
a.sort();
console.log(a);        // [ 101, 32, 80, 90, 91 ]           coz it inspects wordby word 

a.sort((a, b)=> a-b);             //for ascedning order give real sorting based on number
console.log(a);
//if a-b gives negative then b comes first then a 
//if a-b is positive then a comes first then b


//for descedning order
a.sort((a, b)=> b-a);             //for descending order give real sorting based on number
console.log(a);
