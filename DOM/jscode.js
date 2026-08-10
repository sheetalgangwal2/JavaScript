const newElement = document.createElement("h2");
newElement.textContent = "I am sheetal gangwal";

newElement.id = "second";

console.log(newElement);


//select el
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);







const newEl = document.createElement("h3");
newEl.textContent = "diwali is coming soon"

newEl.id = "para";
// newEl.className = "diwali";
// newEl.className += " holi"

newEl.classList.add("diwali");
newEl.classList.add("holi");
newEl.classList.remove("diwali");

console.log(newEl)

newEl.style.backgroundColor = "purple";
newEl.style.fontSize = "40px";



element.before(newEl);
console.log(newEl);





//append

// const list = document.createElement("li")
// list.textContent ="milk"

// const list2 = document.createElement("li")
// list2.textContent ="sugar"

// const list3 = document.createElement("li")
// list3.textContent ="water"

// const list4 = document.createElement("li")
// list4.textContent ="leaves"

// const ulist = document.getElementById("listing");



// ulist.append(list);
// ulist.append(list2);
// ulist.prepend(list3);

// console.log(ulist.children[1].after(list4));          //wants before milk



//not recommend method

// const arr = ["milk", "paneer", "tofu", "water"];
// const ulist = document.getElementById("listing");

// for (let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     ulist.append(list);

// }



//so instead of that we use:

const arr = ["milk", "paneer", "tofu", "water"];
const ulist = document.getElementById("listing");
const fragment = document.createDocumentFragment();


for (let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);

}

ulist.append(fragment);






//delete element

const s1 = document.getElementById("first");
s1.remove();


const calend = document.getElementById("months")
// console.log(calend.children);



const lister = document.createElement("li");
lister.textContent = "hello";

// calend.insertAdjacentElement("afterbegin", lister);    //also beforebegin


// lister.innerHTML = "<h2>hey"              not recommended        use textcontent instead of innerhtml

calend.prepend(lister);


