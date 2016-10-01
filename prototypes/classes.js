
var calculator = {
  a:0,
  b:0,
  read: function () {
    this.a = parseInt(prompt("write please number", 0));
    this.b = parseInt(prompt("write please number", 0));
  },
  sum: function () {
    var value = this.a + this.b;
    alert(value ? value : '');
  },
  mul: function () {
    var value = this.a * this.b;
    alert(value ? value : '');
  } 
};


var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
    return this;
  }
};
