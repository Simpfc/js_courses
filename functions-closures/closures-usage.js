"use strict";

function makeArmy() {
  var num = null;
  var shooters = setShooters(); 
  function  setShooters() {
    for (var i = 0; i < 10; i++) {
      num = i;
      var shooter = function() { // функция-стрелок
       return alert(num);
      };
      shooters.push(shooter());
    }
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен
army[5](); // стрелок выводит 10, а должен