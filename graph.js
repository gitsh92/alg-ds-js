class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] || new Set();
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  removeVertex(v) {
    this.adjacencyList[v].forEach(neighbour => {
      this.adjacencyList[neighbour].delete(v);
    });

    delete this.adjacencyList[v];
  }

  dfs(start) {
    const dfsHelper = (curr, visited) => {
      if (visited.has(curr)) {
        return;
      }

      console.log(curr);

      visited.add(curr);

      for (let v of this.adjacencyList[curr]) {
        dfsHelper(v, visited);
      }
    };

    if (start) {
      dfsHelper(start, new Set());
    } else {
      const visited = new Set();
      for (let v of Object.keys(this.adjacencyList)) {
        if (visited.has(v)) {
          continue;
        }
        dfsHelper(v, visited);
      }
    }
  }

  dfsIterative(start) {
    const dfsIterativeHelper = (start, visited) => {
      const stack = [start];
      while (stack.length > 0) {
        const curr = stack.pop();

        if (visited.has(curr)) {
          continue;
        }

        for (let v of this.adjacencyList[curr]) {
          stack.push(v);
        }

        console.log(curr);

        visited.add(curr);
      }
    };

    if (start) {
      dfsIterativeHelper(start, new Set());
    } else {
      const visited = new Set();

      for (let v of Object.keys(this.adjacencyList)) {
        if (visited.has(v)) {
          continue;
        }

        dfsIterativeHelper(v, visited);
      }
    }
  }

  bfs(start) {
    const bfsHelper = (start, visited) => {
      const queue = [start];

      while (queue.length) {
        const curr = queue.shift();

        if (visited.has(curr)) {
          continue;
        }

        for (let v of this.adjacencyList[curr]) {
          queue.push(v);
        }

        console.log(curr);

        visited.add(curr);
      }
    };

    const visited = new Set();

    if (start) {
      bfsHelper(start, visited);
    } else {
      for (let v of Object.keys(this.adjacencyList)) {
        if (visited.has(v)) {
          continue;
        }
        bfsHelper(v, visited);
      }
    }
  }
}

const g = new Graph();
g.adjacencyList = {
  A: new Set(['B', 'C']),
  B: new Set(['A', 'D']),
  C: new Set(['A', 'E']),
  D: new Set(['B', 'E', 'F']),
  E: new Set(['C', 'D', 'F']),
  F: new Set(['D', 'E']),
  G: new Set(['H']),
  H: new Set(['G'])
};

// g.dfs();
// g.dfsIterative();
g.bfs();
