function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) if (arr[i] == num) return i;
  return -1;
}

console.log(linearSearch([1, 4], 5));
