'use strict'

function createli(elem,listring){
  let li = document.createElement('li');
  elem.append(li);
  li.append(listring);
}
let listring;
let elem = document.getElementById("ul");
do
{
  listring = prompt("Введите содержимое:");
  createli(elem,listring);
}
while(listring != "")

elem.lastChild.remove();