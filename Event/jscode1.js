// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "I am Sheetal Gangwal"
// }





// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "I am Sheetal Gangwal"                   //if i wanna to add more content ..then it will do overwrite ..so it is not preferrable
// }



  
//event listener                                //Best way

//mouseenter, click, dblclick, mouseleave

const element = document.getElementById("first");

// element.addEventListener(`click`,()=>{                     //dblclick also
//     element.textContent = "I am Sheetal Gangwal";
//     element.style.backgroundColor="pink";
//     element.style.color="brown";  
// })


let a = {
    greet:function(value){
        console.log("hello", value);
    }
}

a.greet(10);
a.greet(20);



// element.addEventListener(`mouseenter`,()=>{                   
//     element.textContent = "nice to meet u"; 
// })



// element.addEventListener(`mouseleave`,()=>{                     
//     element.textContent = "I am Sheetal Gangwal";
  
// })



//div

// const child1 = document.getElementById("child1");
// child1.addEventListener(`click`, ()=>{
//     child1.textContent = "i am clicked";
//     child1.style.fontSize = "30px";
// })


const parent = document.getElementById("parent");
console.log(parent.children);

for(let child of parent.children){
    console.log(child);
    child.addEventListener(`click`, ()=>{
        child.textContent = "I am clicked";
        child.style.fontSize = "30px";
      
    })
}
