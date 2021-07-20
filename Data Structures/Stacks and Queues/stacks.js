class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.size) this.first = this.last = node;
    else {
      const prevNode = this.first;
      node.next = prevNode;
      this.first = node;
    }

    this.size++;
    return true;
  }

  pop() {
    if (!this.size) return undefined;

    const removedNode = this.first;
    const nextNode = removedNode.next;

    this.first = nextNode;
    this.size--;

    if (!this.size) this.first = this.last = null;

    return removedNode;
  }
}

module.exports = Stack;
