function quickSort(arr) {
  pivotHelper(arr, 0, arr.length - 1);
  return arr;
}

// // For Pivot = arr[0]
// function pivotHelper(arr, l, r) {
//   if (l >= r) return;
//   let count = 0,
//     pivot = arr[l];

//   console.log(arr);
//   for (let i = l; i <= r; i++) if (arr[i] < pivot) swap(arr, i, l + ++count);
//   swap(arr, l, l + count);
//   // Left
//   pivotHelper(arr, 0, l - 1);
//   //   // Right
//   pivotHelper(arr, l + 1, r);
// }

function pivotHelper(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return;
  let count = 0,
    pivot = Math.ceil((l + r) / 2),
    needswap = true;

  for (let i = l; i <= r; i++)
    if (arr[i] < arr[pivot]) {
      swap(arr, i, l + count);
      if (l + count++ >= pivot) pivot = i;
    }

  swap(arr, pivot, l + count);
  pivot = l + count;

  pivotHelper(arr, l, pivot - 1);
  pivotHelper(arr, pivot + 1, r);
}

function swap(arr, i, j) {
  let temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [4, 6, 9, 50, 61, 89, 1, 2, 5, 3];
// console.log(arr.sort((a, b) => a - b));
console.log(quickSort(arr));
