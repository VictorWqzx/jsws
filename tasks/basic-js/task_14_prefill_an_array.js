/**
Создать функцию prefill, которая возвращает массив из n элементов, где каждый элемент равен значению v.
Попробуй сделать это без использования цикла.

Условия:

v может быть чем угодно (примитивом или объектом).

Если v не передан, заполняй массив значением undefined.

Если n = 0, возвращай пустой массив.

Если n не является целым числом или строкой, представляющей целое число (например, '123'), или если n < 0, нужно выбросить ошибку TypeError.

В TypeError текст сообщения должен быть:

Code Examples

    prefill(3,1) --> [1,1,1]
    
    prefill(2,"abc") --> ['abc','abc']
    
    prefill("1", 1) --> [1]
    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
 */
function prefill(n, v) {
    const num = Number(n);
    if (!Number.isInteger(num) || num < 0 || String(n).trim() === '' || isNaN(num)) {
        throw new TypeError(`${n} is invalid`);
    }
    return Array.from({ length: num }, () => v);
}
console.log(prefill(3, 1));
console.log(prefill(2, "abc"));
console.log(prefill("1", 1));
console.log(prefill(3, prefill(2, '2d')));
