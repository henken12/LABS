const fruit={
    fruitName:"bannana",
    price:5,
    weight:2, 
    fruitInfo:function(){
        console.log(`${this.fruitName} ${this.price} ${this.weight}`);
        // return `${this.fruitName} ${this.price} ${this.weight}`;
    }

}
fruit.fruitInfo();
// console.log(fruit.fruitInfo());

//function declaration
function add(arr){
    
    return arr.reduce((acc,cur)=>acc+cur,0);
}
const arr=[2,3,4,5,6];
console.log(add(arr));

//function expression
const multiple = function(arr){
    
    return arr.reduce((acc,cur)=>acc*cur,1);
}

console.log(multiple(arr));
