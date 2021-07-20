const Queue = require("../Stacks and Queues/queues");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) this.root = node;
    else {
      let searchNode = this.root;
      while (true) {
        if (value == searchNode.value) return undefined;
        if (node.value < searchNode.value) {
          if (!searchNode.left) {
            searchNode.left = node;
            break;
          }
          searchNode = searchNode.left;
        } else {
          if (!searchNode.right) {
            searchNode.right = node;
            break;
          }
          searchNode = searchNode.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    if (this.root == null) return false;
    let searchNode = this.root;
    while (true) {
      if (value == searchNode.value) return true;
      else if (value < searchNode.value) {
        if (!searchNode.left) break;
        searchNode = searchNode.left;
      } else {
        if (!searchNode.right) break;
        searchNode = searchNode.right;
      }
    }

    return false;
  }

  find(val) {
    if (this.root == null) return undefined;
    let searchNode = this.root;
    while (true) {
      if (value == searchNode.value) return searchNode;
      else if (value < searchNode.value) {
        if (!searchNode.left) break;
        searchNode = searchNode.left;
      } else {
        if (!searchNode.right) break;
        searchNode = searchNode.right;
      }
    }

    return undefined;
  }

  BFS() {
    const queue = new Queue(),
      array = [];

    if (this.root) queue.enqueue(this.root);

    while (queue.size) {
      const poppedNode = queue.dequeue().value;
      if (poppedNode.left) queue.enqueue(poppedNode.left);
      if (poppedNode.right) queue.enqueue(poppedNode.right);
      array.push(poppedNode.value);
    }
    return array;
  }

  DFSPreOrder() {
    const data = [];
    const traverse = node => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    const data = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(15);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
