'use strict'
function truncate(str, maxlength){
if (str.length>maxlength){
let lowstr = str.slice(0,maxlength-1)+"...";
alert(lowstr);
}
else alert(str);
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)