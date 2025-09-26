/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
function sortTheOdd(arr) {
  const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  let oddIndex = 0;
    return arr.map(num => {
        if (num % 2 !== 0) {
            return oddNumbers[oddIndex++];
        }
        return num;
    });
}


console.log(sortTheOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortTheOdd([]));
console.log(sortTheOdd([1, 3, 5])); 