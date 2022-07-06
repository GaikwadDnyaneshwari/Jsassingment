 var array = [12,25,135,298,11,1670,34,105,6,512];
var newArr = [];
for(let i=0; i<array.length; i++){
  if(array[i]!=array[i+1]){
    newArr.push(array[i])
    newArr.sort(function(a,b){return a-b});//sorting array increasing order
    newArr.reverse();// printing the decreasing order
  }
}
console.log(newArr)