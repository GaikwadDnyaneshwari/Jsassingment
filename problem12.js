//Print the count of all palindromic numbers till ’n’(inclusive)
var N = 6540;// provided Number by user 
var mynewvalue;
var count = 0;
for(let i=0;i<=N;i++){
  mynewvalue = i.toString().split("").reverse().join("");
  if(i ==mynewvalue){
    count++
  }
}
console.log(`The total count of palindromic Number till ${N} is ${count}`)