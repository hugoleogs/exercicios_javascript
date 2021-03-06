/*

Finding Common Elements

Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.
Examples

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

Notes

Arrays are Sorted!! Try doing this problem with O(n + m) time complexity

URL: https://edabit.com/challenge/jtAvQyyDpFA2EaCcj

*/

const commonElements = (arr1, arr2) => arr2.filter(x => arr1.indexOf(x) >= 0 ? 1:0)


console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]))

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))

console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))

console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]))