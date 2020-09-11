'use strict'

function getWeekDay(date){
let numDayWeak = date.getDay();
let stringDayWeak;

switch (numDayWeak){
    case 0: stringDayWeak = "СБ";break;
    case 1: stringDayWeak = "ВСК";break;
    case 2: stringDayWeak = "ПН";break;
    case 3: stringDayWeak = "ВТ";break;
    case 4: stringDayWeak = "СР";break;
    case 5: stringDayWeak = "ЧТ";break;
    case 6: stringDayWeak = "ПТ";break;
    default : stringDayWeak = "Некорректная дата"
}
alert(stringDayWeak);
}

let date = new Date();
getWeekDay(date);