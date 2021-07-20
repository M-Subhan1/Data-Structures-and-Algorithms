/**
 * Prompt: Write a function called minSubArrayLen which accepts two paramaters - an array
 * of positive integers and a positive integer.
 * This funciton should return the minimal length of a contiguous subarray of which the sum is
 * greater than or equal to the integer passed to the function. If ther isn't one, return 0 instead.
 */

function minSubArrayLen(arr, num) {
  let length = 0;
  let tempLength = 0,
    sum = 0;

  while (sum < num) {
    sum += arr[length++];
  }

  if (length == arr.length) return 0;

  for (let i = 1; i < arr.length; i++) {
    sum = tempLength = 0;

    while (sum < num) sum += arr[i + tempLength++];

    length = length < tempLength ? length : tempLength;
  }

  return length;
}

console.log(minSubArrayLen([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
