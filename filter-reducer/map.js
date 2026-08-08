//2 map

const m1 = new Map([
    ["sheetal", 22],
    [7, "vijay"],
    [true, 11],
    [[10, 20, 30],  "hello"]
]);

m1.set({name:"kaashvi", age:25}, false)

console.log(m1.get("sheetal"));
console.log(m1.size);

console.log(m1);