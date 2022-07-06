var N = 5;
var End = N*3;
var series = 0;
var Arr = []; //for storing series
  if(N<=0){
    console.log("Error");
  }
  else{
    for(let i=0;i<=End;i++){
      if(i%2!=0){
        series = series+i;
        Arr.push(series);
      
      
    }
  }
console.log(`The Given ${N} th position of series is ${Arr[N]}`)
  }