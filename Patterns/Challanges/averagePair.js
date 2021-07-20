/*
Prompt: Write a function called averagePair. Given a sorted array of integers, and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target
average. There may be more than one pair that matches the average target.
*/

function averagePair(arr, avg) {
  let pair = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2.0 == avg) return true;
    if ((arr[left] + arr[right]) / 2.0 > avg) --right;
    left++;
  }

  return false;
}

console.log(averagePair([1, 2, 3, 4, 5, 6, 7], 4));
