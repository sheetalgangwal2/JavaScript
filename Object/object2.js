const user = {
    name: "sheetal",
    age: 19,
    marks: 97,
}



//destructing object
const {name,age, marks} = user;
console.log(name, age, marks);





const arr = [10, 20, 30, 40, 50];
const [first, second] = arr;

console.log(first, second);


//for of loop on array
for (let keys of Object.keys(user)){
    console.log(keys);
}

for (let values of Object.entries(user)){          //gievs array
    console.log(values);
}


for (let [keys, values] of Object.entries(user)){          //gievs array
    console.log(keys, values);
}


