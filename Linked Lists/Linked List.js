// piece of data = val;
// reference to next node = next;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // add to the end
    // function should accept a value
    var NewNode = new Node(val); // create a new Node with the passed value
    if (!this.head) {
      // If there is no head, Set the head and tail to be the NewNode
      this.head = NewNode;
      this.tail = this.head;
    } else {
      // else set the next propery of the tail to NewNode
      this.tail.next = NewNode;
      this.tail = NewNode; // and set the tail property to be NewNode
    }
    this.length++; // increment length by one
    return this; // return the list
  }

  pop() {
    // remove from end
    if (!this.head) return undefined; // If there are no nodes, return  undefined

    var current = this.head; // assign this.head to a variable
    var newTail = current; // assign newTail to the same variable

    while (current.next) {
      // loop through the list until you reach the tail
      newTail = current;
      current = current.next;
    }
    this.tail = newTail; // set the tail to be last to 2nd node.
    this.tail.next = null; // set the next property of the 2nd to last node to be null
    this.length--; // decrement the length by one

    if (this.length === 0) {
      // check if list is empty
      this.head = null; // set head and tail null
      this.tail = null;
    }
    return current; // return popped element
  }

  shift() {
    // remove first element
    if (!this.head) return undefined; // if there are no nodes , return undefined
    var currentHead = this.head; // set the current in a variable
    this.head = currentHead.next; // set the head property to be the current head next property
    this.length--; // decrement length by one
    if (this.length === 0) this.tail = null; // optional;
    return currentHead; // return the value of the removed node
  }

  unshift(val) {
    // Add first element
    var newNode = new Node(val); //create a new node
    if (!this.head) {
      // If there is no head, Set the head and tail to be the NewNode
      this.head = NewNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head; //set newnode next property to be the current head property
      this.head = newNode; // set the head property to be the newly created node
    }
    this.length++; // increment the length by one
    return this; // return the list
  }

  get(index) {
    if (index < 0 || index >= this.length) return null; // check if index is less than 0 or greater than length

    var counter = 0; // set counter to zero

    var current = this.head; //
    while (counter !== index) {
      // loop through linked list
      current = current.next; // current to current.next
      counter++; // increment counter
    }

    return current; // return current
  }

  set(index, val) {
    var foundNode = this.get(index); // use get method on the index and save it in a variable
    if (foundNode) {
      // if foundNode is not null
      foundNode.val = val; // assign foundNode value to the passed value
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false; // check if index is betweeen zero and the list length
    if (index === this.length) return !!this.push(val); // if the index is equal to length, use the push method
    if (index === 0) return !!this.unshift(val); // if index is zero , use the unshift method

    var newNode = new Node(val); // create a newnode with the passed value
    var prev = this.get(index - 1); // using the get method access the node at index - 1
    var temp = prev.next; //
    prev.next = newNode; // set the next property to be the newnode
    newNode.next = temp; // set the next propery on newnode to be the previous next
    this.length++; // increment the length
    return true; // return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined; // check if index is betweeen zero and the list length
    if (index === 0) return this.shift(); // if the index is zero use shift method
    if (index === this.length - 1) return this.pop(); // if the index is equal length-1 , use pop method
    var previousNode = this.get(index - 1); // else use get method to access node at idnex - 1
    var removed = previousNode.next; // { set the next property of that node to be the next of next node
    previousNode.next = removed.next; // }
    this.length--; // decrement length
    return removed; // return removed
  }

  reverse() {
    var node = this.head; //  { create a var called node and initialze it to the head property
    this.head = this.tail; //   Swap the head and the tail
    this.tail = node; //  }
    var next; // create a var called next
    var prev = null; // create a var called prev
    for (var i = 0; i < this.length; i++) {
      //  loop through the list
      next = node.next; // set next to be the next property on whatever node is
      node.next = prev; // set the next property on the node to be whatever the previous is
      prev = node; // set the prev to be the value of the node variable
      node = next; // set the node to be the value of the next variable
    }
    return this;
  }
}

var ll = new SinglyLinkedList();
ll.push('hi');
ll.push('you');
ll.push('there');
ll.set(2, 'here');

console.log(ll.get(2));
