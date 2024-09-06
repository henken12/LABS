const getNewArray=function (array){

return array.filter(f=>f.length> 5 && f.includes('a'));

}
const teams=['chelsea','manchester','liverpool','arsenal'];
console.log(getNewArray(teams));