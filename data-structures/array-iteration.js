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