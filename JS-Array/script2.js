'use strict'

function sumInput(arr=[]){
    let i=0;
    do{
        arr [i] = Number([prompt('Введите число',0)]);
        i++;
    }
    while (Number.isInteger(arr[arr.length-1]));
   let sum = 0;
   for (let i = 0; i < arr.length-1; i++){
    sum += arr[i];
   }
   alert(sum);
}

let numberArr = [];
sumInput(numberArr);