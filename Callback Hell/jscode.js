//Zomato


const orderDetail = {
    orderId :12345,
    food:["pizza", "burger", "pasta", "cake"],
    cost : 620, 
    customer_name : "Sheetal", 
    customer_location : "Indore",
    restaurant_location : "bhopal",
}

function placeorder(orderDetail, Callback){
    console.log(`${orderDetail.cost} payment is in progress`);

    setTimeout(()=>{
        console.log("payment is recieved and order get placed")
        orderDetail.status = true
        Callback(orderDetail);
        
    },5000)
}


function preparing_order(orderDetail, Callback){
    console.log(`your food preparation started of ${orderDetail.food}`);
    
    setTimeout(()=>{
        console.log("your order is now prepared");
        orderDetail.token = 123;
        Callback(orderDetail);
    }, 5000);
}


//delivery

function pickup(orderDetail , Callback){
    console.log(`delivery boy is on the way to pick your order from ${orderDetail.restaurant_location}`);

    setTimeout(()=>{
        console.log("your food is on the way...");
        orderDetail.received = true
        Callback(orderDetail);
    }, 4000)
}

function delivery(orderDetail){
    console.log(`I am on my way to deliver your food on ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Order deliver succesfully!");
        orderDetail.delivery = true;
    },3000)
}



//callback hell
placeorder(orderDetail, (orderDetail)=>{
    preparing_order(orderDetail,(orderDeatil)=>{
        pickup(orderDeatil,()=>{
            delivery(orderDeatil);
        });
            
    });

});
