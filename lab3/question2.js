function sum(h){
return h.filter(n=>n > 20).reduce((x,y)=>x+y,0);
}
const arr=[4,5,6,7,80,90];
console.log(sum(arr));
