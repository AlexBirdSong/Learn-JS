'use strict'

function extractCurrencyValue(str){
let positionDollarSimbol = str.indexOf("$",0);
let positionSpaceAfterValue = str.indexOf(" ",positionDollarSimbol);
let servicecoast = str.slice(positionDollarSimbol+1,positionSpaceAfterValue);
alert (servicecoast);
}

extractCurrencyValue("Стоимость услуги $120 ")
