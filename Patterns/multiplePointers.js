/*
Prompt: Write a function called SumZero which accepts a sorted array of integers. The funciton
should find the first pair of integers where the sum is zero. Return a tupel that contains
both values that sum to zero or return undefined if no valid pair exists.
*/

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] == 0) return [arr[left], arr[right]];
    if (arr[left + arr[right] > 0]) --right;
  }
}

/*
Prompt: Implement a funciton called countUniqueValues that, which accepts a sorted array,
and counts the unique values in the array. There can be negative numbers in the array, but 
the array will always be sorted.
*/

// function countUniqueValues(arr) {
//   let count = 1;
//   let number = arr[0];

//   for (let i = 1; i < arr.length - 1; i++) {
//     if (number != arr[i]) {
//       number = arr[i];
//       count++;
//     }
//   }

//   return count;
// }

function countUniqueValues(arr) {
  let i = 0;

  for (let j = 1; j < arr.length - 1; j++) {
    if (arr[i] != arr[j]) arr[++i] = arr[j];
  }

  return i + 1;
}
