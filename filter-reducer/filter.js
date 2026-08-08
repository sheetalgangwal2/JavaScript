//filter

const arr = [10, 20, 30,40, 50, 60 , 70 , 80, 90, 100];

const newarr = arr.filter((number)=> number > 50);
console.log(newarr);


//not recc method
const array = [2, 4, 6, 8, 10];

const compare = (number)=> number > 50;
//array.prototype means for everything
Array.prototype.filtering = function(compare){

    const ans = [];
    for(let num of this){
        if(compare(num)){
            ans.push();
        }
    }   
    return ans;

}
arr.filtering((num)=>num > 50);
console.log(newarr);


