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
  const middle = Math.floor(len / 2); 
  return len % 2 === 1 ? s[middle] : s.slice(middle - 1, middle + 1);
}

console.log(getMiddle("test"));   
console.log(getMiddle("testing"));
console.log(getMiddle("cloudy"));
console.log(getMiddle("A"));