/**
Дана строка s. Напишите функцию, которая вернет true, если строка является допустимым целым или вещественным числом, и false — если нет.

Примеры допустимых значений, должно вернуть true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
Должно вернуть false:


isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
 */

function isDigit(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
console.log(isDigit("3"));
console.log(isDigit("  3  ")); 
console.log(isDigit("-3.23"));
console.log(isDigit("3-4"));
console.log(isDigit("  3   5"));
console.log(isDigit("3 5"));
console.log(isDigit("zero"));