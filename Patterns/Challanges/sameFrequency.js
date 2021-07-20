/*
Prompt: Given two positive integers, determine if the two numbers have the same frequency of digits.
Your solution must have linear time complexity, O(n).
*/

function sameFrequency(num1, num2) {
  num1 = `${num1}`;
  num2 = `${num2}`;

  if (num1.length != num2.length) return false;

  const obj1 = {},
    obj2 = {};

  for (let i = 0; i < num1.length; i++) {
    obj1[num1[i]] = ++obj1[num1[i]] || 1;
    obj2[num2[i]] = ++obj2[num2[i]] || 1;
  }

  const keys = Object.keys(obj1);
  return keys.every(key => obj1[key] == obj2[key]);
}

console.log(sameFrequency(11223, 12123));
