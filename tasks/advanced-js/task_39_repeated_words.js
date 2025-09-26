/*
Удалить все повторяющиеся слова из строки, оставив только отдельные (первые) записи слов
*/
function removeDuplicateWords(str) {
  return str.split(' ').filter((item, pos, arr) => arr.indexOf(item) === pos).join(' ');
}
console.log(removeDuplicateWords('привет привет как дела дела как привет'));


function removeDuplicateWords(str) {
  let seen = new Set();
  return str
    .split(' ')
    .filter(word => {
      if (seen.has(word)) return false;
      seen.add(word);
      return true;
    })
    .join(' ');
}

console.log(removeDuplicateWords('привет привет как дела дела как привет'));