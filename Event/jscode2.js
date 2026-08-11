
//by deafult false

const grandparent = document.getElementById("grandparent")
grandparent.addEventListener(`click`, (e)=>{
    // console.log(e);
    // e.stopPropagation();
    console.log("grandparent is clicked");
},true)


const parent = document.getElementById("parent")
parent.addEventListener(`click`, (e)=>{
    console.log(e.target);
    console.log("parent is clicked");
},true)


const child = document.getElementById("child")
child.addEventListener(`click`, ()=>{
    console.log("child is clicked");
},true)


