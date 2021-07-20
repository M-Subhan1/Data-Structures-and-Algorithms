/*
Write a recursive function called nestedEvenSum. Return the sum of
all even numbers in an object which may contain nested objects.
*/

function nestedEvenSum(obj) {
  let keys = Object.keys(obj);
  if (keys.length == 0) return 0;

  let sum = 0;
  keys.forEach(key => {
    if (typeof obj[key] == "number") {
      if (obj[key] % 2 == 0) sum += obj[key];
    } else if (typeof obj[key] == "object") {
      sum += nestedEvenSum(obj[key]);
    }
    delete obj[key];
  });

  return sum;
}

console.log(nestedEvenSum({ name: 2, hi: { oops: 2, hi: { oops: 1 } } }));
