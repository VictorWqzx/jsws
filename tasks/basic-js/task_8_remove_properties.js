/**
 * Реализуй функцию removeProperties(obj, keys),
 * которая возвращает копию объекта без свойств, перечисленных в массиве keys.
 * removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']) → { a: 1 }
 *
 */
function removeProperties(obj, keys) {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
}
console.log(removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']));
console.log(removeProperties({name: 'Victor', age: 19, city: 'Minsk'}, ['age']));
console.log(removeProperties({x: 10, y: 20, z: 30}, ['x', 'z']));

// начиная с 8 проверить задачи и просмотреть решения