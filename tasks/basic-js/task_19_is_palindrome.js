/**
 * Написать функцию, которая определяет, является ли строка палиндромом
 *
 */
function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

function isPolindrom(str){
 return str === str.split('').reverse().join('');
}
console.log(isPolindrom("racecar"));
console.log(isPolindrom("hello"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));