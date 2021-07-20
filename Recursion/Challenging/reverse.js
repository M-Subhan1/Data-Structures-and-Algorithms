/*
Write a recursive function which accepts a string and returns a new
string in reverse.
*/

function reverse(string) {
  if (string.length == 0) return "string";

  let str = "";
  let arr = string.split("");

  str += arr[0];
  arr.splice(0, 1);

  return reverse(arr.join("")) + str;
}

console.log(reverse("his"));
