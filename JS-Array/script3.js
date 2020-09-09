'use strict'

function getMaxSubSum(arr){
    let max = 0;
   
for(let j=0 ; j<arr.length; j++){
    let sum = 0;
    for(let i=j ; i<arr.length; i++){
        sum +=  arr[i];
        max = Math.max(max, sum);
    } 
}
alert(max);
}


getMaxSubSum([-1, 2, 3, -9]); // 5
getMaxSubSum([-1, 2, 3, -9, 11]); // 11
getMaxSubSum([-2, -1, 1, 2]); // 3
getMaxSubSum([1, 2, 3]); // 6
getMaxSubSum([100, -9, 2, -3, 5]); // 100