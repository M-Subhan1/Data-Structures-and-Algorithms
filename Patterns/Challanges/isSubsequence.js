/*
 * Prompt: Write a function which takes in two strings and checks whether the characters in the first string
 * form a subsequence of the characters in the second string. In other words, the function should check whether
 * the characters in the first string appear somewhere in the second string, without their order changing,
 * but the characters don't necessarily need to be consecutive.
 *
 * (sting, sing) ==> returns true
 * (abc, acb) ==> returns false
 */

function checkString(str1, str2) {
  if (str2.length > str1.length) return false;
  str = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    if (str[0] == str1[i]) str.splice(0, 1);
  }

  if (str.length == 0) return true;
  return false;
}
