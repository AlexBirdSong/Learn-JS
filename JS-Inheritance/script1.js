'use strict'

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // ? (1)
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2)
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3)