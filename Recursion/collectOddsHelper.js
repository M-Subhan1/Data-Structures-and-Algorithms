/**
 * Prompt: Write a funciton that returns an array containing only the odd values of an input array
 * Your solution must call an inner helper function recursively.
 */

function oddOnly(arr) {
  helper(arr, 0);
  return arr;
}

function helper(arr, index) {
  if (arr.every(el => el % 2 == 1)) return arr;

  if (arr[index] % 2 == 0) {
    arr.splice(index, 1);
  }

  return helper(arr, index + 1);
}

console.log(oddOnly([1, 2, 3, 4, 5, 6]));
