/*
 * Prompt: Write a function called findLongestSubstring which accepts a string and returns the length
 * of the longest substring with all distinct characters.
 */

function findLongestSubstring(str) {
  let string = [];
  let tempStr = [];
  let index;

  for (let i = 0; i < str.length; i++) {
    if (tempStr.includes(str[i])) {
      if (tempStr.length > string.length) string = [...tempStr];
      index = tempStr.indexOf(str[i]);
      tempStr.splice(0, index + 1);
    }

    tempStr[tempStr.length] = str[i];
  }

  string = tempStr.length > string.length ? tempStr : string;
  return string.join("");
}

console.log(findLongestSubstring("oabcdhelprstvxopqrstuvwxyz"));

// ohelopqrsto
