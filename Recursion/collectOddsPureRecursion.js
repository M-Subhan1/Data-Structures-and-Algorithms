/**
 * Prompt: Write a pure recursive function that returns an array containing only the odd values of an
 * input array of integers that is passed in.
 */

function oddOnly(arr) {
  if (arr.every(el => el % 2 == 1)) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr.splice(i, 1);
      break;
    }
  }

  return oddOnly(arr);
}

console.log(oddOnly([1, 2, 3, 4, 5, 6]));
