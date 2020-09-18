'use strict'

let table = document.body.firstElementChild;

for(let i = 0; i <= 4; i++)
    for(let j = 0; j <= 4; j++)
    if (i==j){
        table.rows[i].cells[j].style.backgroundColor = 'red' 
    }

