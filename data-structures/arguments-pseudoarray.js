"use strict";
/**
 * Псевдомассив аргументов "arguments"
 * https://learn.javascript.ru/arguments-pseudoarray
 */

/**
 * 1 Проверка на аргумент-undefined
 */

 // Implementation
 function  argumentExist(x) {
 	if ('0' in arguments) {
 		return 1;	
 	} else {
 		return 0;
 	}
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

// Tests
describe("argumentExist", function() {
  it("The argument was passed to a function. We expected to get int 1", function() {
    assert.equal(argumentExist(undefined), 1);
  });
  it("The argument was not passed to a function. We expected to get int 0", function() {
    assert.equal(argumentExist(), 0);
  });
})


/**
 * 2 Сумма аргументов - Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
 */
// sum() = 0
// sum(1) = 1
// sum(1, 2) = 3
// sum(1, 2, 3) = 6
// sum(1, 2, 3, 4) = 10
// sum({}, 'string', 3, 4) = 7
function argumentSum() {
    var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		var n = +arguments[i];
		if(n) {
			sum += n;
		}
	}
    return sum;
}
// Tests
describe("argumentSum", function() {
  it("argumentSum(1, 2, 3, 4) = 10", function() {
    assert.equal(argumentSum(1, 2, 3, 4), 1);
  });
  it("argumentSum(1, {}, 'str', 4) = 5", function() {
    assert.equal(argumentSum(1, {}, 'str', 4), 0);
  });
})


