let global = 10;

function greet(){

    let global = 40;
    console.log(global);    //now it gives 40 not 10  coz 40 is in fnction
}

greet();
