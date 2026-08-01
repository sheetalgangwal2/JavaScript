console.log(Math.abs(-4));    //4
console.log(Math.PI);

console.log(Math.ceil(2.3));    //3
console.log(Math.floor(2.3));   //2

console.log(Math.max(223, 454, 24, 5675, 3453));     //5675
console.log(Math.min(223, 454, 24, 5675, 3453));     //24

//Math.floor(Math.random( * total number fo outcomes) + shift)


console.log(Math.random());           //from range 0 to 1



//gnerate random value btw  0 to 10
console.log(Math.floor(Math.random()*10+1)); 

// 1 to 6 
console.log(Math.floor(Math.random()*6+1));


//15 to 25
// Math.floor(Math.random() * (max-min)+1 +min)
console.log(Math.floor( Math.random()*11)+15)   //15 -->shift



//OTP generator(4-digit)         not secure 
//1000-9999
console.log(Math.floor(Math.random()*8999+1)+1000)

//(6-digit)
//100000-999999
console.log(Math.floor(Math.random()*899999+1)+100000)