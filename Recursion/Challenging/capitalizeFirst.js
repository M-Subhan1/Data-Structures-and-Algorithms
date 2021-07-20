/*
Write a recursive function called capitalizeFirst. Given an array
of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  if (arr.length == 0) return arr;

  let str = "";

  for (let i = 0; i < arr[0].length; i++) {
    if (i == 0) str += arr[0][i].toUpperCase();
    else str += arr[0][i];
  }

  arr.splice(0, 1);

  capitalizeFirst(arr).unshift(str);

  return arr;
}

console.log(capitalizeFirst(["hi", "bye", "kay"]));
