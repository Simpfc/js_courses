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
 * makeArmy description]
 * @return {[type]} [description]
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