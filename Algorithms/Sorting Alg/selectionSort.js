function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }

    swap(arr, i, smallest);
  }

  return arr;
}

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

console.log(selectionSort([19, 15, 8, 11, 10]));

// [5,3,2,1,7]
