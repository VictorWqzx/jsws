/**
 * Реализовать map вручную
 *
 */
function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}
console.log(map([1, 2, 3], x => x * 2));
console.log(map(['a', 'b', 'c'], (x, i) => x.toUpperCase() + i));
console.log(map([true, false, true], x => !x));