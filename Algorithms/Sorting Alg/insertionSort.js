// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let index = 0;
//     while (arr[i] >= arr[index]) index++;
//     let part = arr.splice(i, 1);
//     arr.splice(index, 0, ...part);
//   }

//   return arr;
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }

  return arr;
}

console.log(insertionSort([1, 7, 3, 6, 19, 2]));

// [19,1,7,3,6]
// [1,19,7,3,6]
// [1, ]
