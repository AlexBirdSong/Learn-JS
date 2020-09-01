'use strict'

function Accumulator(startingValue){

    this.value=startingValue;
    this.read = function(){
        this.value+= +prompt("Введите число",5);
    }
}


let accumulator = new Accumulator(39); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value);