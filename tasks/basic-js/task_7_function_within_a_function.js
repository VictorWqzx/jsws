/**
Дано значение n, напишите функцию always, которая возвращает функцию, возвращающую n. В Ruby она должна возвращать lambda или proc.

var three = always(3);
three(); // returns 3
 */
function always(n) {
  return function() {
    return n;
  }
}
console.log(always(3)()); 
console.log(always(5)()); 
console.log(always(10)());