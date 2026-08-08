//Data strtures :

//1 sets(unique value only) 

const arr = [10, 20, 23, 23, 47, 10, 45, 20];

const s1 = new Set(arr);

s1.add(16);
s1.delete(47);
// s1.clear(); 

console.log(s1);
console.log(s1.has(22));          //false
console.log(s1.has(20));          //true


console.log(s1.size);             //length
 


const email =["sg@2gm", "vj@1gm","vj@1gm", "sg@2gm"];   //wanna remove duplicate

const s_email = [...new Set(email)];
console.log(s_email);

for(let num of s_email){
    console.log(num);
}