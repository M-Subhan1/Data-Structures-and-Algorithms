function binarySearch(arr, num) {
  let left = 0,
    right = arr.length - 1,
    mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (num == arr[mid]) return mid;
    else if (num < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return arr[left] == num ? left : -1;
}

// [1,2,3,4,5]
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));
