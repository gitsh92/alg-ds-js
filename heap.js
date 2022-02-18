class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  extractMax() {
    if (this.values.length === 0) {
      return; // or throw
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const max = this.values[0];
    this.values[0] = this.values.pop(); // send last el to top
    this.sinkDown();
    return max;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const el = this.values[idx];
    let parentIdx = this.getParentIdx(idx);

    while (parentIdx >= 0 && el > this.values[parentIdx]) {
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

        if (el < leftChildEl || el < rightChildEl) {
          const maxChildIdx = leftChildEl >= rightChildEl ? leftIdx : rightIdx;
          this.swap(idx, maxChildIdx);
          idx = maxChildIdx;
        }
      } else if (this.hasLeftChild(idx)) {
        // has only left child
        const leftChildEl = this.getLeftChildEl(idx);

        if (el < leftChildEl) {
          const leftChildIdx = this.getLeftChildIdx(idx);
          this.swap(idx, leftChildIdx);
          idx = leftChildIdx;
        }
      } else {
        // has no children
        break;
      }
    }
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

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(10);
heap.insert(20);
heap.insert(56);
heap.insert(57);
heap.insert(11);
heap.insert(21);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
