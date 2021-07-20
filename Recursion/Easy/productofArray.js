/**
 * Prompt: Write a recursive function called productOfArray which takes in an array and returns
 * the product of all of the elements of that array.
 */

function productOfArray(arr) {
  if (arr.length == 0) return 1;
  let num = arr[0];
  arr.splice(0, 1);

  return num * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 4]));
