/**
 * Написать функцию, которая определяет, является ли строка палиндромом
 *
 */
function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));