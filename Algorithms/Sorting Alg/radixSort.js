function radixSort(arr) {
  let maxDigits = mostDigits(arr);
  let buckets;
  let digit;

  for (let i = 0; i < maxDigits; i++) {
    buckets = Array.from({ length: 10 }, () => []);
    arr.forEach(num => {
      digit = getDigit(num, i);
      buckets[digit].push(num);
    });

    arr = [].concat(...buckets);
  }

  return arr;
}

function getDigit(num, position) {
  for (let i = 0; i < position; i++) num = Math.floor(Math.abs(num / 10));
  return num % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = -Infinity;
  arr.forEach(el => {
    max = Math.max(max, digitCount(el));
  });
  return max;
}

console.log(
  radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])
);
