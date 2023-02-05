class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newnode = new Node(val);

    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      this.tail.next = newnode;
      newnode.prev = this.tail;
      this.tail = newnode;
    }

    this.length++;
    return newnode;
  }

  pop() {
    if (!this.head) return undefined;
    var currenttail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.tail = currenttail.prev;
      this.tail.next = null;
      currenttail.prev = null;
    }

    this.length--;
    return currenttail;
  }

  shift() {
    if (!this.head) return undefined;
    var oldhead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = oldhead.next;
      this.head.prev = null;
      oldhead.next = null;
    }
    this.length--;

    return oldhead;
  }

  unshift(val) {
    var newhead = new Node(val);

    if (!this.head) {
      this.head = newhead;
      this.tail = this.head;
    } else {
      newhead.next = this.head;
      this.head.prev = newhead;
      this.head = newhead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    var counter, current;

    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;

      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      true;
    }
    false;
  }
  // 0 -> 1 -> 2 -> 3 -> 4
  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    var newnode = new Node(val);

    var prevnode = this.get(index - 1);
    var node = prevnode.next;

    newnode.prev = prevnode;
    prevnode.next = newnode;

    newnode.next = node;
    node.prev = newnode;

    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    var removednode = this.get(index);
    var prevnode = removednode.prev;
    var nextnode = removednode.next;

    prevnode.next = nextnode;
    nextnode.prev = removednode;
    removednode.next = null
    removednode.prev = null
    this.length--;
    return this;
  }

  print() {
    var current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const dll = new DoubleLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);

// console.log( dll.shift());
dll.insert(0, 'newone');
dll.insert(7, 'lastone');
dll.remove(7)

dll.print();
