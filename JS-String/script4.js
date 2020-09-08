'use strict'

function ucFirst(str){
 if (str!=""){
    let nstr = str[0].toUpperCase()+str.slice(1);
    alert(nstr);
 }
else{
    alert("Имя пусто")
}
}

let str = "Валера";
ucFirst(str)
