class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    var newnode = new Node(val);

    if (!this.first) {
      this.first = newnode;
      this.last = newnode;
    } else {
      var temp = this.first;
      newnode.next = temp;
      this.first = newnode;
    }
    return ++this.length;
  }

  pop() {
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

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();
s.pop();
s.print();
