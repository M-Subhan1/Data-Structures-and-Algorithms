/*
Write a recursive function called is Palindrome which returns true if
the string passsed to it is a palindrome (reads the same forward
  and back)
*/

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] != str[str.length - 1]) return false;

  let strArr = str.split("");
  strArr.splice(0, 1);
  strArr.splice(strArr.length - 1, 1);

  return isPalindrome(strArr.join());
}
