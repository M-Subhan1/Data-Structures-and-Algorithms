class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.size) this.first = this.last = node;
    else {
      const prevNode = this.last;
      prevNode.next = node;
      this.last = node;
    }

    this.size++;
    return true;
  }

  dequeue() {
    if (!this.size) return null;

    const removedNode = this.first;
    const nextNode = removedNode.next;

    this.first = nextNode;
    this.size--;

    if (!this.size) this.first = this.last = null;

    return removedNode;
  }
};
