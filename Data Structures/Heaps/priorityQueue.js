class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);

    let index = this.values.length - 1,
      parentIndex,
      temp;

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index].priority > this.values[parentIndex].priority)
        break;

      temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
    }
    return this.values;
  }

  dequeue() {
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
        (!rightChild && element.priority < leftChild.priority) ||
        (rightChild &&
          element.priority < leftChild.priority &&
          element.priority < rightChild.priority)
      )
        break;

      swap =
        !rightChild || leftChild.priority < rightChild.priority
          ? leftChildIdx
          : rightChildIdx;

      temp = this.values[swap];
      this.values[swap] = this.values[idx];
      this.values[idx] = temp;

      idx = swap;
      element = this.values[idx];
    }
  }
}

module.exports = PriorityQueue;
