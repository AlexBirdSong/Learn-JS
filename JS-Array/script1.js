'use strict'

let styles = ["Джаз","Блюз"];
styles.push("Рок-н-ролл");
let centerstring = Math.round(styles.length/2)-1;
styles[centerstring] = "Классика";
styles.shift();
styles.unshift("Рэп" , "Регги" );

alert(styles);