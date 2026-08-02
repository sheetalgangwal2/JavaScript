//Dates

const now = new Date();        //UTC time   5.30hrs
//console.log(now);

console.log(now.toString());     //show accurate time ..takes form my system
console.log(now.toISOString());  //utc
console.log(now.toLocaleString());   //local time


// a/c to local time
console.log(now.getDay());    //0 -->sunday , 1 -->monday ......
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());       //months strt from 0 .....january -->0 febuary -->1



//2
const now2 = new Date(2026, 7,2, 10, 20,40, 120 );    //year, month(strt from 0) , date, hrs, min, sec , milisec
console.log(now2.toString());          


//3
// const now3 = Date.now();
// const dates = new Date(1785687672039);
// console.log(now3);              //shows in miliseconds..........1785687672039

//const dates = new Date(0);          //the beginning of milisecond time 
const dates = new Date();  
// console.log(dates.toString());


const noww = Date.now(now);
console.log(dates);


