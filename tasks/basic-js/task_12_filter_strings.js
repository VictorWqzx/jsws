/**
 * Реализуйте функцию filterStrings(arr),
 * которая возвращает новый массив,
 * содержащий только те элементы исходного массива,
 * которые являются строками
 *
 */
function filterStrings(arr) {
  const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterStrings([1, 'hello', true, 'world', 42]));
console.log(filterStrings(['apple', 'banana', 3, 'orange', false]));
console.log(filterStrings([null, 'test', undefined, 'example']));