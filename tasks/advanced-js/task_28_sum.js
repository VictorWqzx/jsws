/*
Написать функцию sum, которая принимает число, 
и может вызываться бесконечное число раз, 
пока не будет вызвана без аргументов - 
тогда возвращается сумма переданных ранее чисел (sum(2)(5)(9)())
*/
function sum(num) {
    let currentSum = num || 0;
    const inner = (nextNum) => {
        if (nextNum === undefined) {
            return currentSum;
        }
        currentSum += nextNum;
        return inner;
    };
    return inner;
}
console.log(sum(2)(5)(9)());
console.log(sum(1)(2)(3)(4)(5)());