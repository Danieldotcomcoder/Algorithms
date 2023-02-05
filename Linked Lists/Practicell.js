class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newnode = new Node(val);

    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newtail = current;

    while (current.next) {
      newtail = current;
      current = current.next;
    }
    this.tail = newtail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.head = this.tail;
    }
    return current;
  }

  unshift(val) {
    var newnode = new Node(val);

    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
    this.length++;
    return newnode;
  }

  shift() {
    if (!this.head) return undefined;
    var currenthead = this.head;
    this.head = currenthead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currenthead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    var current = this.head;
    var counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
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
 

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newnode = new Node(val);

    var prevnode = this.get(index - 1);
    var nextnode = prevnode.next;
    prevnode.next = newnode;
    newnode.next = nextnode;

    this.length++;

    return true;
  }
 // 0 -> 1 -> 2 -> 3 -> 4
  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length - 1) return this.pop()
    if(index === 0) return this.shift()

    var prevnode = this.get(index - 1)
    var node = prevnode.next
    
    prevnode.next = node.next

    this.length --

    return node

  }

  reverse() {
    var node= this.head
    this.head = this.tail
    this.tail = node

    var next, prev = null;

    for(var i = 0 ; i < this.length ; i++) {
       next = node.next
       node.next = prev
       prev = node
       node = next
    }
    return this
  }

  print() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}
const ll = new LinkedList();
ll.push(0)
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.reverse()

ll.print()
