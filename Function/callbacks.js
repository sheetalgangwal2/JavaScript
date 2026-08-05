function greet (){
    console.log("hello world!")
}

function code(){
    console.log("learning javascript")
}

function meet(callback){
    console.log("i am going to meet someone")
    callback();
    //another code to execute
    console.log("life is beautiful")
}

//meet(greet);



//i want to print "i am going to meet someone" then "learning javascript" after then "life is beautiful"

meet(greet);
meet(code);




//read downward



//blinkit merged

function blinkitOrderPlaced(){
    console.log("we have strted packing your order");
}



function zomatoOrderPlaced(){
    console.log("we have strted preparing your food");
}

function payment(amount, callback){
    console.log(`${amount} payment has initialized`);

    console.log("payment is recived");
    callback();

    //another code 
}

//if they choose zomato

payment(500,  zomatoOrderPlaced);           //RUN

//if tehy choose blinkit
// payment(300, blinkitOrderPlaced);
