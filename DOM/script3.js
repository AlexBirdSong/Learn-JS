'use strict'

function clear(elem) {
    while (elem.firstChild) {
        elem.firstChild.remove();
      } 
}
let elem = document.getElementById('elem');
clear(elem); 