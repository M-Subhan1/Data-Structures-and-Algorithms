/*
Prompt: Write a function called SameFrequency, which accepts two arrays. The function should
return true if every value in the array has its corresponding value squared in the second array.
The frequency of the values must be the same
*/

function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  const obj1 = {},
    obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    let val = arr1[i];
    obj1[val] = ++obj1[val] || 1;
    val = arr2[i];
    obj2[val] = ++obj2[val] || 1;
  }

  const keys = Object.keys(obj1);
  return keys.every(key => obj1[key] == obj2[key * key]);
}

/*
Prompt: Given two strings, write a function to determine if the second string is an anagram
of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as 'cinema' formed from 'iceman'.
*/

function anagram(str1, str2) {
  if (str1.length != str2.length) return false;

  const obj1 = {},
    obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    let val = str1[i];
    obj1[val] = ++obj1[val] || 1;
    val = str2[i];
    obj2[val] = ++obj2[val] || 1;
  }

  return Object.keys(obj1).every(key => obj1[key] == obj2[key]);
}
