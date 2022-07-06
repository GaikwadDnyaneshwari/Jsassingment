var array = [1,2,3,4,5,6,7]//provided number
var l1 = parseInt(array.length/2);
var l2 = array.length;
var array2 = [];
newArr1 = array.slice(0,l1);
newArr2 = array.slice(l1,l2);
array2 = newArr2.concat(newArr1);
console.log(`The left rotated array is [${array2}]`)