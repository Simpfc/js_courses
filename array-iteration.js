"use strict";

/**
 * Перепишите цикл через map
 * https://learn.javascript.ru/task/rewrite-for-map  
 * @return {[type]} [description]
 */
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(function(element){
	return element.length;
});

describe("rewriteForMmap", function() {
  it("The argument was passed to a function. We expected to get int 1", function() {
    assert.equal(argumentExist(undefined), 1);
  });
  it("The argument was not passed to a function. We expected to get int 0", function() {
    assert.equal(argumentExist(), 0);
  });
})

/**
 * Массив частичных сумм
 * для arr = [ 1, 2, 3, 4, 5 ]
 * getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
 */

var a = [ 1, 2, 3, 4, 5 ];
var na = [];
a.reduce(function(sum, currentItem, index, arr){
  na.push(sum + currentItem);
  return sum + currentItem;
}, 0);