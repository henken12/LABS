console.log();

//Exercie 1
console.log("================================ Exercie 1 OutPUt =================================");

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


//Exercie 2 Function Decleration
console.log("================================ Exercie 2 Function Decleration OutPUt =================================");
function sum(h){
    return h.filter(n=>n > 20).reduce((x,y)=>x+y,0);
    }
    const array=[4,5,6,7,80,90];
    console.log(sum(array));


    //Exercie 3 Function Expression
console.log("========================= Exercie 3 Function Expression OutPUt========================");

    const getNewArray=function (array){

        return array.filter(f=>f.length>= 5 && f.includes('a'));
        
        }
        const teams=['chelsea','manchester','liverpool','arsenal'];
        console.log(getNewArray(teams));

            //Exercie 4 Function Decleration
console.log("========================= Exercie 4 Function Decleration OutPUt========================");
    
function upper(arr){
    return arr.reduce((accu,curr)=>{
    if(curr.length>5){
        accu.push(curr.toUpperCase());  // Add to the accumulator if condition is true
    }
    return accu;  // Ensure the accumulator is returned to be used in the next iteration
    }, []);
    }
    const subjects=['javaScript','java','database','software engineering'];
    console.log(upper(subjects));
