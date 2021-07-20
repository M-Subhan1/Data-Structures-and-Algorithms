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
  }

  removeVertex(vertex) {
    const vertexArr = this.adjacencyList[vertex];
    if (!vertexArr) return false;

    vertexArr.forEach(el => this.removeEdge(vertex, el));
    delete this.adjacencyList[vertex];

    return true;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.removeVertex("A");

console.log(graph);
