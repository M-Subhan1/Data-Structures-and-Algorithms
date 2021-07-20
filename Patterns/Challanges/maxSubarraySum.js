/**
 * Prompt: Given an array of integers and a number, write a function called maxSubArraySum, which finds
 * the maxiumum sum of a subarrawy with the length of the number passed to the function.
 * NOTE that a subarray must consist of consecutive elements from the original array.
 */

function maxSubArraySum(arr, num) {
  if (num > arr.length) return false;

  let sum = 0,
    tempSum = 0;

  for (let i = 0; i < num; i++) tempSum += arr[i];

  sum = tempSum;

  for (let i = 1; i <= arr.length - num; i++) {
    tempSum = tempSum + arr[num + i - 1] - arr[i - 1];
    sum = tempSum > sum ? tempSum : sum;
  }

  return sum;
}

console.log(maxSubArraySum([1, 2, 3, 4, 5, 1, 6, 7, 8, 0], 4));
// 1,2,3,4,5,6,7
