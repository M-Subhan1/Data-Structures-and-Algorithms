function merge(arr1, arr2) {
  let arr = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) arr.push(arr1[i++]);
    else arr.push(arr2[j++]);
  }

  let subArr;

  if (j < arr2.length) subArr = arr2.slice(j);
  else if (i < arr1.length) subArr = arr1.slice(i);

  return arr.concat(subArr);
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let index = Math.floor(arr.length / 2);

  let arrSort1 = mergeSort(arr.slice(0, index));
  let arrSort2 = mergeSort(arr.slice(index));

  return merge(arrSort1, arrSort2);
}

const random = num => {
  let arr = [];
  for (let i = 0; i < num; i++) arr.push(Math.random());
  return arr;
};

const data = random(100);

console.log(mergeSort(data));
// [4,5] [1,2,3]
