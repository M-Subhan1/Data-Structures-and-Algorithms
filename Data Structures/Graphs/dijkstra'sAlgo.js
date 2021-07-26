const PriorityQueue = require("../Heaps/priorityQueue");

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    return true;
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
    return true;
  }

  shortestPath(start, end) {
    // Initial State
    const previous = { [start]: null },
      visited = [],
      distance = { [start]: 0 };

    for (let el in this.adjacencyList) {
      if (el != start) distance[el] = Infinity;
    }

    let current = start,
      neighbours,
      queue = new PriorityQueue(),
      currentDistance;

    while (true) {
      neighbours = this.adjacencyList[current];
      currentDistance = distance[current];
      visited[current] = true;

      neighbours.forEach(e => {
        if (currentDistance + e.weight < distance[e.node]) {
          distance[e.node] = currentDistance + e.weight;
          previous[e.node] = current;
        }
      });

      for (let e in this.adjacencyList)
        if (visited[e] !== true) queue.enqueue(e, distance[e]);

      current = queue.dequeue();
      if (!current) break;
      current = current.value;
    }

    let path = [],
      temp = end;

    while (path[0] != start) {
      path.unshift(temp);
      temp = previous[temp];
    }

    return path;
  }

  maxST() {
    const queue = new PriorityQueue();
    const visited = {};
    for (let prop in this.adjacencyList) {
      this.adjacencyList[prop].forEach(e => queue.enqueue(e, e.weight));
    }

    let edge,
      results = [];
    while (queue.values.length) {
      edge = queue.dequeue().value;

      if (!(visited[edge.vertex1] && visited[edge.vertex2])) {
        visited[edge.vertex1] = visited[edge.vertex2] = true;
        results.push(edge);
      }
    }

    return results;
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("B", "E", 3);
graph.addEdge("E", "F", 1);
graph.addEdge("E", "D", 3);
graph.addEdge("F", "D", 1);
graph.addEdge("F", "C", 4);
graph.addEdge("D", "C", 2);
graph.addEdge("A", "C", 2);

console.log(graph.shortestPath("A", "E"));
