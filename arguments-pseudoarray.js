/**
 * Псевдомассив аргументов "arguments"
 * https://learn.javascript.ru/arguments-pseudoarray
 */

 // Проверка на аргумент-undefined
 function f(x) {
 	if ('0' in arguments) {
 		return 1;	
 	} else {
 		return 0;
 	}
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0

// Сумма аргументов - Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
// sum() = 0
// sum(1) = 1
// sum(1, 2) = 3
// sum(1, 2, 3) = 6
// sum(1, 2, 3, 4) = 10


