class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val); //create a new node with value passed in the function
    if (this.length === 0) {
      // If the head is null , set the head and tail to the newnode
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // set the next property of the tail to be newnode
      newNode.prev = this.tail; // set the previous property of the the newnode to be the tail
      this.tail = newNode; // set the tail to be the newnode
    }
    this.length++; // incremet the length
    return this; // return the list
  }

  pop() {
    if (!this.head) return undefined; // If there is no head return undefined
    var poppedNode = this.tail; // store the current tail in a var to return later
    if (this.length === 1) {
      // If the length is 1 set the head and tail to null
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; // Set the tail to be the previous node
      this.tail.next = null; // set the newtail next to null
      poppedNode.prev = null; //
    }
    this.length--; // decrement the length
    return poppedNode; // return removedd value
  }

  shift() {
    if (this.length === 0) return undefined; // if the length is zero, return undefined
    var oldHead = this.head; // store the current head property in a variable
    if (this.length === 1) {
      // if the length is one :
      this.head = null; // set head to be null
      this.tail = null; // set tail to be null
    } else {
      this.head = oldHead.next; // update the head to be the next of the old head
      this.head.prev = null; // set the head previous property to be null
      oldHead.next = null; // set the old head's next to be null
    }
    this.length--; // decrement the length
    return oldHead; // return old head
  }

  unshift(val) {
    var newNode = new Node(val); // create a new node with the value passed
    if (this.length === 0) {
      // if the length is zero
      this.head = newNode; // set head to be the newnode
      this.tail = newNode; // set tail to be the newnode
    } else {
      this.head.prev = newNode; // set the prev propery of the head to be newnode
      newNode.next = this.head; // set the next propery of newnode to be the head property
      this.head = newNode; // set the head to be newnode
    }
    this.length++; // increment the length
    return this; // return new list
  }

  get(index) {
    if (index < 0 || index >= this.length) return null; // check if index is between zero and the length
    var count, current;
    if (index <= this.length / 2) {
      // if index is less than or equal to half the length of the list
      count = 0;
      current = this.head;
      while (count !== index) {
        // loop through the list from the head towards the middle
        current = current.next;
        count++;
      }
    } else {
      // if index is greater than half the length of the list
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        // loop through the list from the tail towards the middle
        current = current.prev;
        count--;
      }
    }
    return current; // return the node once found
  }

  set(index, val) {
    var foundNode = this.get(index); // create a var to save the result of the get method at the given index
    if (foundNode != null) {
      // if the returned node is valid
      foundNode.val = val; // set the value of this node to be the passed val into the function
      return true; // return true
    }
    return false; // else return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false; // check if index is betweeen zero and the list length
    if (index === 0) return !!this.unshift(val); // if index is zero , use the unshift method
    if (index === this.length) return !!this.push(val); // if the index is equal to length, use the push method
    var newNode = new Node(val); // create a newnode with the passed value
    var beforeNode = this.get(index - 1); // using the get method access the node at index - 1
    var afterNode = beforeNode.next; // {
    (beforeNode.next = newNode), (newNode.prev = beforeNode); // set the next and prev properties on correct nodes to link
    (newNode.next = afterNode), (afterNode.prev = newNode); //  everything together }
    this.length++; // increment the length
    return true; // return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined; // check if index is betweeen zero and the list length
    if (index === 0) return this.shift(); // if the index is zero use shift method
    if (index === this.length - 1) return this.pop(); // if the index is equal length-1 , use pop method

    var removedNode = this.get(index); // else use get method to access node at idnex - 1
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode; // set the next and prev properties on correct nodes to link
    afterNode.prev = beforeNode; //  everything together
    removedNode.next = null; // set next and prev to be null on removednode
    removedNode.prev = null;

    this.length--; // decrement the length
    return removedNode; // return removed node
  }
}
