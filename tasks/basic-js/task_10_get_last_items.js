/**
 * Написать функцию getLastNItems(arr, n), которая возвращает последние n символов массива
 *
 */
function getLastNItems(arr, n) {
  return arr.slice(-n);
}   
console.log(getLastNItems([1, 2, 3, 4, 5], 2)); 
console.log(getLastNItems(['a', 'b', 'c', 'd', 'e'], 3)); 
console.log(getLastNItems([true, false, true, false], 1));