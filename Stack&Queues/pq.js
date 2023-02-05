class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    var newnode = new Node(val);

    if (!this.first) {
      this.first = newnode;
      this.last = newnode;
    } else {
      this.last.next = newnode;
      this.last = newnode;
    }
    return ++this.length;
  }

  dequeue() {
    if (!this.first) return undefined;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return temp.val;
  }

  print() {
    var current = this.first;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.dequeue();

q.print();
