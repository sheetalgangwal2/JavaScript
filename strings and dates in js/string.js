//String
const str1 = "sheetal";
const str2 = 'gangwal';

const day = 20;
const str3 = `hello world!
life is beautiful ${day}`;     //`````below esc            modern way

console.log(str1, str2, str3);




const str4 = `Hello Coder Army Hello`;

console.log(str4.length);     //including space
console.log(str4[4]);     //index
console.log(str4.toUpperCase()); //capital letter
console.log(str4.toLowerCase());

console.log(str4.indexOf(`lo`));
//-1 if letter are not found or case sensitive

console.log(str4.lastIndexOf(`Hello`));
//if word repeats use lastindexof(``)

console.log(str4.includes(`world`));  //false
//if word found it gives true



//Slicing
console.log(str4.slice(3,6));     //lst index not included
console.log(str4.slice(8));        //(0, 8)


//negative slicing
console.log(str4.slice(-2));
console.log(str4.slice(-8, -3));

//similarly with substring
console.log(str4.substring(2, 6));    //but -ve index/slicing are not allowed



//Concatenation
const a = "sheetal";
const b = "gangwal";
const c = a + " " + b;

console.log(c);



//replace
console.log(str4.replace("Hello", "hey"));        //"old", "new"
console.log(str4.replaceAll("Hello", "hey"));



//trimming
const user = "  sheetal gangwal   ";
console.log(user.trim());      //trinstart() , trimend()


//split
const name  = "sheetal, vijay, kashvi, hema";
console.log(name.split(","))    //basis of comma

const names  = "sheetal, vijay, kashvi, hema";
console.log(names.split(" "))    //basis of space