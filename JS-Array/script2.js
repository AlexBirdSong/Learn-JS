'use strict'

function checkSpam(str){
    let lowerstr = str.toLowerCase();
    if (lowerstr.includes('viagra')||(lowerstr.includes('xxx')))return true
    else return false
}
let str = prompt("Введите текст");
alert(checkSpam(str));
