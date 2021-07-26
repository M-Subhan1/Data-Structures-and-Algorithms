const Stack = require("../Stacks and Queues/stacks");
const Queue = require("../Stacks and Queues/queues");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    this.adjacencyList[name] = this.adjacencyList[name] || [];
    return true;
  }

  addEdge(vertex, vertex2) {
    const listV1 = this.adjacencyList[vertex];
    const listV2 = this.adjacencyList[vertex2];

    if (!listV1 || !listV2) return false;
    if (!listV1.includes(vertex2)) {
      this.adjacencyList[vertex].push(vertex2);
      this.adjacencyList[vertex2].push(vertex);
    }

    return true;
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(e => e !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(e => e !== v1);

    return true;
  }

  removeVertex(vertex) {
    const vertexArr = this.adjacencyList[vertex];
    if (!vertexArr) return false;

    vertexArr.forEach(el => this.removeEdge(vertex, el));
    delete this.adjacencyList[vertex];

    return true;
  }

  DFS_recursive(v) {
    const keys = Object.keys(this.adjacencyList);
    const visited = {};
    const results = [];

    keys.forEach(el => (visited[el] = false));

    const traverse = v => {
      results.push(v);
      visited[v] = true;

      let vertex = this.adjacencyList[v];
      if (vertex == [] || vertex == undefined) return;

      for (let i = 0; i < vertex.length; i++) {
        if (!visited[vertex[i]]) {
          traverse(vertex[i]);
        }
      }
    };

    traverse(v);
    return results;
  }

  DFS_iterative(start) {
    const visited = {};
    const keys = Object.keys(this.adjacencyList);
    keys.forEach(v => (visited[v] = false));
    const results = [];
    const stack = new Stack();
    let node, list;
    stack.push(start);

    while (stack.size != 0) {
      node = stack.pop().val;

      if (!visited[node]) {
        results.push(node);
        visited[node] = true;

        list = this.adjacencyList[node];
        list.forEach(el => stack.push(el));
      }
    }

    return results;
  }

  BFS(start) {
    const queue = new Queue();
    let neighbours, node;
    const visited = {},
      results = [];

    queue.enqueue(start);
    while (queue.size) {
      node = queue.dequeue();
      neighbours = this.adjacencyList[node.value];

      if (visited[node.value] !== true) {
        results.push(node.value);
        visited[node.value] = true;

        neighbours.forEach(el => {
          queue.enqueue(el);
        });
      }
    }

    return results;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.DFS_recursive("A"));
console.log(graph.DFS_iterative("A"));
console.log(graph.BFS("A"));
