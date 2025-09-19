/**
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
 */
function getMiddle(s) {
    const len = s.length;
    return len % 2 === 1 ? s.charAt(len / 2) : s.substr(len / 2 - 1, 2);
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("cloudy"));
console.log(getMiddle("A"));