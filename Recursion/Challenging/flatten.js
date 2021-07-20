/*
Write a recursive function called flatten which accepts an array of arrays and
returns a new array with all values.
*/

function flatten(arr) {
  if (arr.length == 0) return [];

  let val = arr[0];
  arr.splice(0, 1);

  return [...val, ...flatten(arr)];
}

console.log(flatten([[1], [2], [3, 4, 5]]));
