/*
Удалить все повторяющиеся слова из строки, оставив только отдельные (первые) записи слов
*/
function removeDuplicateWords(str) {
  return str.split(' ').filter((item, pos, arr) => arr.indexOf(item) === pos).join(' ');
}
console.log(removeDuplicateWords('привет привет как дела дела как привет'));
