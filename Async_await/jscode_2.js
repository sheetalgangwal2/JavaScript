// fetch("https://api.github.com/users")

// .then((response)=>response.json())
// .then((data)=>console.log(data));



// const response = await fetch("https://api.github.com/users")     //jab tak ye execute na ho jae ..tb tk agli line per nhi jaana
// const data = await response.json();
// console.log(data);


async function github () {
    console.log("I am sheetal");
    const response = await fetch("https://api.github.com/users")     //jab tak ye execute na ho jae ..tb tk agli line per nhi jaana
    const data = await response.json();
    console.log(data);
}

github();

console.log("hello world");            //now its print first

