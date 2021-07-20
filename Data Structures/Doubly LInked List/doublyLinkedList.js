class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.length) this.head = this.tail = node;
    else {
      const previous = this.tail;
      this.tail = node;
      previous.next = this.tail;
      this.tail.previous = previous;
    }

    this.length++;
    return true;
  }

  pop() {
    if (this.length == 0) return undefined;

    const removedNode = this.tail;
    const newTail = this.tail.previous;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length == 1) this.tail = this.head;
    else if (!this.length) this.head = this.tail = null;

    return removedNode;
  }

  unshift(val) {
    const previous = this.head;
    const newHead = new Node(val);

    if (!this.length) this.head = this.tail = node;

    this.head = newHead;
    previous.previous = this.head;
    this.head.next = previous;
    this.length++;

    return true;
  }

  shift() {
    if (this.length == 0) return undefined;

    const previous = this.head;
    const newHead = this.head.next;
    newHead.previous = null;
    this.head = newHead;
    this.length--;

    if (this.length == 1) this.head = this.tail;
    else if (!this.length) this.head = this.tail = null;

    return previous;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let node;
    if (index < Math.floor(this.length / 2)) {
      node = this.head;
      for (let i = 0; i < index; i++) node = node.next;
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) node = node.previous;
    }

    return node;
  }

  set(index, val) {
    if (index < 0 || index >= this.length) return false;

    let node;
    if (index < Math.floor(this.length / 2)) {
      node = this.head;
      for (let i = 0; i < index; i++) node = node.next;
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) node = node.previous;
    }

    node.val = val;

    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index == this.length) return this.push(val);
    else if (index == 0) return this.unshift(val);

    let nextNode;

    if (index < Math.floor(this.length / 2)) {
      nextNode = this.head;
      for (let i = 0; i < index; i++) nextNode = nextNode.next;
    } else {
      nextNode = this.tail;
      for (let i = this.length - 1; i > index; i--)
        nextNode = nextNode.previous;
    }

    const node = new Node(val);
    const previousNode = nextNode.previous;

    nextNode.previous = node;
    node.next = nextNode;
    previousNode.next = node;
    node.previous = previousNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (this.length - 1 == index) return this.pop();
    else if (index == 0) return this.shift();

    let node;

    if (index < Math.floor(this.length / 2)) {
      node = this.head;
      for (let i = 0; i < index; i++) node = node.next;
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) node = node.previous;
    }

    const next = node.next;
    const previous = node.previous;
    previous.next = next;
    next.previous = previous;

    this.length--;
    return node;
  }
}

const list = new DoublyLinkedList();
list.push("2");
list.push("3");
list.unshift("1");
list.unshift("0");
list.remove(3);

console.log(list.get(2));
