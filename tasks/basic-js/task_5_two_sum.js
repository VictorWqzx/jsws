/**
Дан массив целых чисел nums и целое число target. Верните индексы двух чисел таких, что их сумма равна target.

Можете считать, что для каждого входного набора данных существует только одно решение, и один и тот же элемент нельзя использовать дважды.

Вы можете вернуть ответ в любом порядке.

Пример 1:

Вход: nums = [2,7,11,15], target = 9
Выход: [0,1]
Объяснение: Так как nums[0] + nums[1] == 9, возвращаем [0, 1].

Пример 2:

Вход: nums = [3,2,4], target = 6
Выход: [1,2]

Пример 3:

Вход: nums = [3,3], target = 6
Выход: [0,1]

Ограничения:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Существует только одно правильное решение.

Дополнительно: Можете ли вы предложить алгоритм со сложностью менее O(n²)?
 */

function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
}   
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));  
