class Node {
  constructor(val) {
    this.right = null;
    this.left = null;
    this.val = val;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    }
    var current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  contain(val) {
    if (this.root === null) {
      return false;
    }
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }

  BFS() {
    var data = [];
    var queue = [];
    var current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      data.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];
    const traverse = (node) => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    var data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }
}

tt = new BTS();
tt.insert(10);
tt.insert(5);
tt.insert(18);
tt.insert(8);
tt.insert(3);
tt.insert(15);
tt.insert(22);

console.log("PreOrder" ,  tt.DFSPreOrder());
console.log("PostOrder" , tt.DFSPostOrder());
console.log("InOrder" , tt.DFSInOrder());
