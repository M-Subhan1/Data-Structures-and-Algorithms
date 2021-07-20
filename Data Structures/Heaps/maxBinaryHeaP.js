class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1,
      parentIndex,
      temp;

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index] <= this.values[parentIndex]) break;

      temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
    }
    return this.values;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length) this.values[0] = end;

    this.trickleDown();
    return max;
  }

  trickleDown() {
    let idx = 0;
    const length = this.values.length;
    let element = this.values[0];
    let leftChildIdx, rightChildIdx;
    let leftChild, rightChild;
    let swap, temp;

    while (true) {
      leftChildIdx = 2 * idx + 1;
      rightChildIdx = 2 * idx + 2;

      if (leftChildIdx < length) leftChild = this.values[leftChildIdx];
      else break;

      rightChild = rightChildIdx < length ? this.values[rightChildIdx] : null;

      if (
        (!rightChild && element > leftChild) ||
        (rightChild && element > leftChild && element > rightChild)
      )
        break;

      swap =
        !rightChild || leftChild > rightChild ? leftChildIdx : rightChildIdx;

      temp = this.values[swap];
      this.values[swap] = this.values[idx];
      this.values[idx] = temp;

      idx = swap;
      element = this.values[idx];
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(5);
heap.insert(10);
heap.insert(40);
heap.insert(100);
heap.insert(1000);
heap.extractMax();
heap.extractMax();

console.log(heap.extractMax());
