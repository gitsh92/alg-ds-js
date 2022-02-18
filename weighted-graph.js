class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  get nodes() {
    return Object.keys(this.adjacencyList);
  }

  edges(vertex) {
    return this.adjacencyList[vertex];
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] || [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.connected(vertex1, vertex2)) {
      // if already connected, just update the edge weight
      const edge1 = this.adjacencyList[vertex1].find(e => e.node === vertex2);
      edge1.weight = weight;

      const edge2 = this.adjacencyList[vertex2].find(e => e.node === vertex1);
      edge2.weight = weight;
    } else {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  connected(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].some(e => e.node === vertex2) &&
      this.adjacencyList[vertex2].some(e => e.node === vertex1)
    );
  }
}

exports.WeightedGraph = WeightedGraph;
