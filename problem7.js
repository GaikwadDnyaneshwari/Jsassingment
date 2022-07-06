var num = 8;// number provided
var series = 0;
var end = num*3;
var arr = []; //for storing series
  if(num<=0){
    console.log("Error");
  }
  else{
    for(let i=1;i<=end;i++){
      if(i%2!=0){
        series = series+i;
        arr.push(series);
      
      series = series+i;
      //console.log(series);
    }
  }
console.log(`The Number At ${num} position of series is ${arr[num]}`);
  }
 