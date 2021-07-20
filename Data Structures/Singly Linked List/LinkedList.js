class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    if (!this.length) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this.length++;

    return true;
  }

  pop() {
    if (!this.head) return undefined;

    let newTail = this.head;
    let currentTail = this.tail;

    for (let i = 1; i < this.length - 1; i++) newTail = newTail.next;

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (!this.length) this.head = this.tail = null;

    return currentTail;
  }

  shift() {
    if (!this.length) return undefined;
    const currentHead = this.head;

    this.head = this.head.next;
    this.length--;

    if (!this.length) this.head = this.tail = null;

    return currentHead;
  }

  unshift(val) {
    const currentHead = this.head;
    const newHead = new Node(val);

    if (!this.length) this.tail = newHead;
    newHead.next = currentHead;
    this.head = newHead;

    this.length++;

    return true;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;

    let node = this.head;
    for (let i = 0; i < index; i++) node = node.next;
    return node;
  }

  set(val, index) {
    if (index < 0 || index >= this.length) return false;

    let node = this.head;
    for (let i = 0; i < index; i++) node = node.next;

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    else if (index == 0) return this.unshift(val);
    else if (index == this.length) return this.push(val);

    const prevNode = this.get(index - 1);
    const currentNode = prevNode.next;
    const newNode = new Node(val);

    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    else if (index == 0) return this.shift();
    else if (index == this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;

    prevNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  print() {
    let node = this.head;
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(node.val);
      node = node.next;
    }

    console.log(arr);
    return arr;
  }

  reverse() {
    if (this.length <= 1) return this;

    let node = this.head,
      next,
      prev = null;

    this.head = this.tail;
    this.tail = node;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

// 0,1,2,3,4

let list = new SinglyLinkedList();

list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.reverse();
list.print();

console.log();
