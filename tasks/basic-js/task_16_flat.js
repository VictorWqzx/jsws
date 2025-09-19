/**
 * Реализовать собственную flat функцию, соответствующую методу массива flat
 *
 */
function flat(arr, depth = 1) {
    if (depth < 1) return arr.slice();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i], depth - 1));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flat([1, 2, [3, 4]])); 
console.log(flat([1, 2, [3, [4, 5]]], 2)); 