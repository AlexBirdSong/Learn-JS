'use strict'

let user = {
    name: "Василий Иванович",
    age: 35
  };

  let JSONFormatUser = JSON.stringify(user);
  alert(JSONFormatUser);
  let JSONParseUSer = JSON.parse(JSONFormatUser);
  alert(JSONParseUSer.name + " " + JSONParseUSer.age + " годиков");