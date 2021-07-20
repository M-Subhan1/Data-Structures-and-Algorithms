/*
Write a recursive function called someRecursive which accepts an array
and a callback. The function returns true if a single value in
the array returns true when passed to the callback. Otherwise it
returns false.
*/

function someRecursive(arr, cb) {
  if (arr.length == 0) return false;
  if (cb(arr[0])) return true;
  arr.splice(0, 1);
  return someRecursive(arr, cb);
}

const isOdd = val => val % 2 == 1;

console.log(someRecursive([2, 4, 6, 8, 10], isOdd));
