/**
 *
 * Prompt: Write a recursive implementation to return the factorial of any number that is passed into
 * your function.
 */

function factorial(num) {
  if (num == 1) return 1;

  return factorial(num - 1) * num;
}

console.log(factorial(4));
