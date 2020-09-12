'use strict'

function formatDate(date){
    let currDate = new Date();
    let answ;

    if(currDate-date <= 1 * 1000) return answ = "прямо сейчас"
    else if(currDate-date > 1 * 1000 && currDate-date <= 60 * 1000) return answ = (currDate-date)/1000 + " сек. назад"
    else if(currDate-date > 1 * 60 * 1000 && currDate-date <= 60 * 60 * 1000) return answ = (currDate-date)/(1000 * 60) + " мин. назад"
    else {
        return answ = date  
    }
};


alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

 alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

 // вчерашняя дата вроде 31.12.2016, 20:00
 alert( formatDate(new Date(new Date - 86400 * 1000)) );