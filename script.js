'use strict'

function findmax(a , b){
  if (a>b){
    return a;
  }
  else return b;
};
let i;
i=findmax(2, 5);
alert( i );
i=findmax(3, -1);
alert( i );
i=findmax(1, 1);
alert( i );
