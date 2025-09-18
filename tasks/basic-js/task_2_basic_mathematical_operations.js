/**
Ваша задача — создать функцию, которая выполняет четыре базовые математические операции.

Функция должна принимать три аргумента — operation (строка/символ), value1 (число), value2 (число).
Функция должна возвращать результат применения выбранной операции к числам.

Примеры (operation, value1, value2) --> результат
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
 */

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}
console.log(basicOp('+', 4, 7)); 
console.log(basicOp('-', 15, 18));  
console.log(basicOp('*', 5, 5)); 
console.log(basicOp('/', 49, 7));    