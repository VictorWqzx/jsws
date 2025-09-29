/*
Реализуй функцию invert(obj), которая меняет местами ключи и значения. 
Если значения повторяются, сохранить массив ключей:
invert({ a: 1, b: 2, c: 1 }) // → { 1: ['a','c'], 2: ['b'] }
*/
function invert(obj) {
    return Object.fromEntries(Object.entries(obj).map(([Key, Value]) => [Value, Key]));
}
console.log(invert({ a: 1, b: 2, c: 1 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2, e: 3 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2, e: 3, f: 4 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2, e: 3, f: 4, g: 5 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2, e: 3, f: 4, g: 5, h: 6 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2, e: 3, f: 4, g: 5, h: 6, i: 7 }));
console.log(invert({ a: 1, b: 2, c: 1, d: 2, e: 3, f: 4, g: 5, h: 6, i: 7, j: 8 }));