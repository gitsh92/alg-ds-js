class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(value, priority) {
    this.nodes.push(new Node(value, priority));
    this.bubbleUp();
  }

  dequeue() {
    if (this.nodes.length === 0) {
      return; // or throw
    }

    if (this.nodes.length === 1) {
      return this.nodes.pop();
    }

    const maxPriority = this.nodes[0];
    this.nodes[0] = this.nodes.pop(); // send last el to top
    this.sinkDown();
    return maxPriority;
  }

  bubbleUp() {
    let idx = this.nodes.length - 1;
    const el = this.nodes[idx];
    let parentIdx = this.getParentIdx(idx);

    while (parentIdx >= 0 && el.priority < this.nodes[parentIdx].priority) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }

  sinkDown() {
    let idx = 0;

    while (true) {
      let minChildIdx = idx;

      if (
        this.hasLeftChild(idx) &&
        this.getLeftChildEl(idx).priority < this.nodes[minChildIdx].priority
      ) {
        minChildIdx = this.getLeftChildIdx(idx);
      }

      if (
        this.hasRightChild(idx) &&
        this.getRightChildEl(idx).priority < this.nodes[minChildIdx].priority
      ) {
        minChildIdx = this.getRightChildIdx(idx);
      }

      if (minChildIdx === idx) {
        return;
      }

      this.swap(idx, minChildIdx);
      idx = minChildIdx;
    }
  }

  get size() {
    return this.nodes.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  hasParent(idx) {
    return this.getParentIdx(idx) >= 0;
  }

  getParentEl(idx) {
    return this.nodes[this.getParentIdx(idx)];
  }

  hasLeftChild(idx) {
    return 2 * idx + 1 < this.nodes.length;
  }

  hasRightChild(idx) {
    return 2 * idx + 2 < this.nodes.length;
  }

  getLeftChildEl(idx) {
    return this.nodes[2 * idx + 1];
  }

  getRightChildEl(idx) {
    return this.nodes[2 * idx + 2];
  }

  getLeftChildIdx(idx) {
    return 2 * idx + 1;
  }

  getRightChildIdx(idx) {
    return 2 * idx + 2;
  }

  swap(idx1, idx2) {
    const temp = this.nodes[idx1];
    this.nodes[idx1] = this.nodes[idx2];
    this.nodes[idx2] = temp;
  }
}

const pq = new PriorityQueue();
pq.enqueue('A', 1);
pq.enqueue('B', 2);
pq.enqueue('C', 3);
pq.enqueue('D', 4);
pq.enqueue('E', 5);
pq.enqueue('F', 6);
pq.enqueue('G', 1);

while (!pq.isEmpty()) {
  console.log(pq.dequeue());
}

module.exports = {
  PriorityQueue
};
