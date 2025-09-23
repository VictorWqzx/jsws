/**
 * Написать функцию makeImmutable(obj), которая возвращает копию объекта, которую нельзя изменять
 *
 */
function makeImmutable(obj) {
  return Object.freeze({ ...obj });
}
console.log(makeImmutable({ a: 1, b: 2 })); 
console.log(makeImmutable({ name: 'Victor', age: 19 })); 
console.log(makeImmutable({ x: 10, y: 20, z: 30 }));