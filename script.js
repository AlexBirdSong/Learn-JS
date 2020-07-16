'use strict'

function readNumber(){
  let num="sdsa";
  while ( typeof(num) == 'string'){
    num = prompt('Введите число',0);
    if (isFinite(num)){
      //alert('число: '+ num)
      //break;
      return num;
    }
  }
}

alert(`Число: ${readNumber()}`);