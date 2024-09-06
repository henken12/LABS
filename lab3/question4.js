function upper(arr){
return arr.reduce((accu,curr)=>{
if(curr.length>5){
    accu.push(curr.toUpperCase());
}
return accu; 
}, []);
}
const subjects=['javaScript','java','database','software engineering'];
console.log(upper(subjects));

const x= 10;
console.log(x);
console.log(y);
const y= 20;