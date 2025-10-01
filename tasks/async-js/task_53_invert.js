/*
Реализуй функцию invert(obj), которая меняет местами ключи и значения. 
Если значения повторяются, сохранить массив ключей:
invert({ a: 1, b: 2, c: 1 }) // → { 1: ['a','c'], 2: ['b'] }
*/
function invert(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (!(value in result)) {
            result[value] = [];
        }
        result[value].push(key);
    }
    return result;
}

console.log(invert({ a: 1, b: 2, c: 1 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2, e: 3 }));
