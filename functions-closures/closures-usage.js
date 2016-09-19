/**
 * Функция - строковый буфер
 * https://learn.javascript.ru/task/stringbuffer
 */
 function makeBuffer() {
  var str = '';
  var buffer = function (val) {
    /*
      В решении используется сравнение (arguments.length == 0), что правилнее чем typeof val === 'undefined'
      Так как имеет место быть такой кейс
    it("Переменной забыли происвоить зачение и вызвали buffer(someVar)", function() {
      var someVar;
      buffer(someVar);
      assert.equal(buffer(), "undefined");
    });
     */ 
    if (typeof val === 'undefined') {
      return str;
    }
    str += '' + val;
  }
  return buffer;
}

/**
 * Строковый буфер с очисткой
 * https://learn.javascript.ru/task/stringbuffer-with-clear
 */
  function makeBuffer() {
  var str = '';
  var buffer = function (val) {
    if (arguments.length == 0) {
      return str;
    }
    str += '' + val;
  }
  buffer.clear = function () {
     str = '';
  }
  return buffer;
}

/**
 * Сортировка
 * https://learn.javascript.ru/task/sort-by-field
 */

function byField(type) {
  return function (a, b)  {
    if(!a.hasOwnProperty(type)) {
      alert('Perpoerty was not found');
    }
    return a[type] > b[type] ? 1 : -1;

  }
}

 
/**
 * Фильтрация через функцию
 * https://learn.javascript.ru/task/filter-through-function
 */
function inArray(list) {

    var handler = function(array) {
      var  newArray = [];
      list.forEach(function(el, i){
          var searchedIndex = array.indexOf(el);
        if(searchedIndex >= 0) {
          newArray.push(array[searchedIndex]);
        }
      })
      return newArray;
    }
    return handler;
}

function inBeetwen

function filter (array, arrFilter) {
  array = array || [];
    return arrFilter(array);
}

/**
 * Армия функций
 * https://learn.javascript.ru/task/make-army
 */
function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++) {
    function shooter () {
        var num = i;
    return function() { // функция-стрелок
          alert(num); // выводит свой номер
      };
    }
    shooters.push(shooter());
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
