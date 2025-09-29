/*
Реализуйте функцию deepClone(obj), которая создаёт глубокую копию переданного объекта. 
Копия не должна иметь общих ссылок с оригиналом (кроме примитивов)
*/
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
console.log(deepClone({ a: 1, b: 2, c: 3 }));
console.log(deepClone({ a: 1, b: 2, c: 3, d: 4 }));
console.log(deepClone({ a: 1, b: 2, c: 3, d: 4, e: 5 }));
console.log(deepClone({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }));
console.log(deepClone({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }));
console.log(deepClone({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 }));
