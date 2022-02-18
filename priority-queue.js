class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push(new Node(value, priority));
    this.bubbleUp();
  }

  dequeue() {
    if (this.values.length === 0) {
      return; // or throw
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const maxPriority = this.values[0];
    this.values[0] = this.values.pop(); // send last el to top
    this.sinkDown();
    return maxPriority;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const el = this.values[idx];
    let parentIdx = this.getParentIdx(idx);

    while (parentIdx >= 0 && el.priority < this.values[parentIdx].priority) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }

  sinkDown() {
    let idx = 0;
    const el = this.values[idx];

    while (true) {
      if (this.hasRightChild(idx)) {
        // has two children
        const leftIdx = this.getLeftChildIdx(idx);
        const rightIdx = this.getRightChildIdx(idx);
        const leftChildEl = this.getLeftChildEl(idx);
        const rightChildEl = this.getRightChildEl(idx);

        if (
          el.priority > leftChildEl.priority ||
          el.priority > rightChildEl.priority
        ) {
          const priorityChildIdx =
            leftChildEl.priority <= rightChildEl.priority ? leftIdx : rightIdx;
          this.swap(idx, priorityChildIdx);
          idx = priorityChildIdx;
        } else {
          break;
        }
      } else if (this.hasLeftChild(idx)) {
        // has only left child
        const leftChildEl = this.getLeftChildEl(idx);

        if (el.priority > leftChildEl.priority) {
          const leftChildIdx = this.getLeftChildIdx(idx);
          this.swap(idx, leftChildIdx);
          idx = leftChildIdx;
        } else {
          break;
        }
      } else {
        // has no children
        break;
      }
    }
  }

  get size() {
    return this.values.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getParentEl(idx) {
    return this.values[this.getParentIdx(idx)];
  }

  hasLeftChild(idx) {
    return 2 * idx + 1 < this.values.length;
  }

  hasRightChild(idx) {
    return 2 * idx + 2 < this.values.length;
  }

  getLeftChildEl(idx) {
    return this.values[2 * idx + 1];
  }

  getRightChildEl(idx) {
    return this.values[2 * idx + 2];
  }

  getLeftChildIdx(idx) {
    return 2 * idx + 1;
  }

  getRightChildIdx(idx) {
    return 2 * idx + 2;
  }

  swap(idx1, idx2) {
    const temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}

// const pq = new PriorityQueue();
// pq.enqueue('A', 1);
// pq.enqueue('B', 2);
// pq.enqueue('C', 3);
// pq.enqueue('D', 4);
// pq.enqueue('E', 5);
// pq.enqueue('F', 6);
// pq.enqueue('G', 1);

// while (!pq.isEmpty()) {
//   console.log(pq.dequeue());
// }

module.exports = {
  PriorityQueue
};
