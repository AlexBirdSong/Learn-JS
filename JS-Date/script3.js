'use strict'

function getDateAgo(date, days){
    let day = date.getDate();
    let mounth = date.getMonth();
    let year = date.getFullYear();
    let bufDay = day - days;
    // alert (bufDay);
    // let dateOnString = String(year)+""+String(mounth)+String(bufDay);
    // let newDate = (dateOnString);
    let newDate = new Date(year, mounth , bufDay);
    alert (newDate);


}

let date = new Date(2020, 8, 12);
getDateAgo(date, 2);
