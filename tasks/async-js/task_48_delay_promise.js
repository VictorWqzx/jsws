/*
Реализуйте функцию delayPromise(delay, value), которая возвращает промис, 
резолвящийся через указанное количество миллисекунд со значением value.
*/
function delayPromise(delay, value) {
    return new Promise(resolve => setTimeout(resolve, delay, value));
}
console.log(delayPromise(1000, 'Hello'));