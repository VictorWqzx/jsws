/**
 * Реализовать функцию ifElse(condition, thenFn, elseFn),
 * которая имитирует поведение конструкции if-else.
 * condition — булевое значение (или выражение, приводимое к булевому типу);
 * thenFn — функция, которая вызывается, если condition истинно;
 * elseFn — функция, которая вызывается, если condition ложно (false или falsy-значение)
 *
 * Не используйте if, else, ?, тернарный оператор в теле функции.
 *
 */
function ifElse(condition, thenFn, elseFn) {
  const fnMap = new Map([
    [true, thenFn],
    [false, elseFn]
  ]);
  return fnMap.get(Boolean(condition))();
}
console.log(ifElse(true, () => 'then', () => 'else')); 
console.log(ifElse(false, () => 'then', () => 'else'));