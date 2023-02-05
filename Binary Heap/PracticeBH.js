class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleup();
  }

  bubbleup() {
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while (idx > 0) {
      let parentidx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentidx];
      if (parent <= element) break;
      this.values[parentidx] = element;
      this.values[idx] = parent;
      idx = parentidx;
    }
  }
}
