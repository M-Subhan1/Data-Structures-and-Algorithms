/*
Prompt: Write a funciton called maxSubArraySum which accepts an array of integers and a number
called n. The funciton should calculate the maxiumum number of n consecutive elements in the array.
*/

// Naive Aproach
// function maxSubArraySum(arr, n) {
//   if (n > arr.length) return null;
//   let max = -Infinity;
//   let testMax;

//   for (let i = 0; i <= arr.length - n; i++) {
//     testMax = 0;
//     for (let j = 0; j < n; j++) testMax += arr[i + j];
//     if (max < testMax) max = testMax;
//   }

//   return max;
// }

// Sliding Window

function maxSubArraySum(arr, n) {
  if (n > arr.length) return null;
  let max = -Infinity;
  let testMax = 0;

  for (let i = 0; i < n; i++) testMax += arr[i];

  for (let i = 1; i < arr.length - n + 1; i++) {
    if (testMax > max) max = testMax;
    else {
      testMax = testMax + (arr[i + n - 1] - arr[i - 1]);
    }
  }

  return max;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
