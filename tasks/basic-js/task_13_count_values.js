/**
 * Реализуй функцию countValues(obj),
 * которая возвращает объект, где ключ — это значение из исходного объекта,
 * а значение — количество его повторений.
 * countValues({ a: 'x', b: 'y', c: 'x', d: 'z' }) → { x: 2, y: 1, z: 1 }
 *
 */
function countValues(obj) {
    const result = {};
    for (const key in obj) {
        const value = obj[key];
        result[value] = (result[value] || 0) + 1;
    }
    return result;
}
console.log(countValues({ a: 'x', b: 'y', c: 'x', d: 'z' })); 
console.log(countValues({ name: 'Victor', city: 'Minsk', hobby: 'gym', pet: 'corgi dog'})); 
console.log(countValues({ x: 1, y: 2, z: 1, w: 3, v: 2, u: 1 }));