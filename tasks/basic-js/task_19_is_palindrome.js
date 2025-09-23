/**
 * Написать функцию, которая определяет, является ли строка палиндромом
 *
 */
function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
const isPalindrome = (str) => {
  for (let left = 0, right = str.length - 1; left < right; left++, right--) {
    if (str[left] !== str[right]) return false;
  }
  return true;
};

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));  

function isPolindrom(str){ //str.split('') все равно создает массив, я говорила про метод с указателями
 return str === str.split('').reverse().join('');
}
console.log(isPolindrom("racecar"));
console.log(isPolindrom("hello"));



