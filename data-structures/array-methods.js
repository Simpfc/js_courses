/**
 * camelcase
 * Перевести текст вида border-left-width в borderLeftWidth
 * https://learn.javascript.ru/task/camelcase
 */
function camelize(string) {
  var array = string.split('-');
  var result = '';
  array.forEach(function(el, i){
    if(i){
      result += el.charAt(0).toUpperCase() + el.slice(1);
    } else {
      result += el;
    }
  });
  return result;
}

/**
 * remove-class
 * Функция removeClass
 */