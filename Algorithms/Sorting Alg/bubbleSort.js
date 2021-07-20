function bubbleSort(arr) {
  let swap, temp;

  for (let i = 0; i < arr.length - 1; i++) {
    swap = 0;

    for (let j = 1; j < arr.length - i + 1; j++) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swap++;
      }
    }

    if (!swap) return arr;
  }

  return arr;
}

console.log(bubbleSort([19, 15, 8, 11, 10]));

// [5,3,2,1,7]
