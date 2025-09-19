/**
 * Написать функцию, которая удаляет все гласные из строки, возвращает новую строку
 *
 */
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
console.log(removeVowels("hello"));
console.log(removeVowels("world"));
console.log(removeVowels("javascript"));