/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let temp = this.head;
    let popped = this.tail;
    if(!this.head.next){
      this.head = null;
      this.tail = null;
      this.length--;
      return popped.val;
    }
    for (let i = 0; i < this.length; i++){
      if (temp.next.val === this.tail.val){
        this.tail = temp;
        this.tail.next = null;
        this.length--;
        return popped.val;
      }
      else{
        temp = temp.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 1){
      let temp = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    let temp = this.head.val;
    let next = this.head.next
    this.head = next;
    this.length--;
    if(this.length === 1) this.tail = this.head;
    
    return temp;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let curNode = this.head;
    for (let i = 0; i < idx; i++){
      curNode = curNode.next;
    }
    return curNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let curNode = this.head;
    for (let i = 0; i < idx; i++){
      curNode = curNode.next;
    }
    curNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    if(idx >= this.length){
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    let curNode = this.head;
    let nextNode;
    for (let i = 0; i < idx - 1; i++){
      curNode = curNode.next;
      nextNode = curNode.next;
    }
    curNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 1){
      let temp = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    let curNode = this.head;
    for (let i = 0; i < idx - 1; i++){
      curNode = curNode.next;
    }
    let tempVal = curNode.next.val;
    let temp = curNode.next.next;
    curNode.next = temp;
    this.length--;
    return tempVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    
    let temp = 0;
    let curNode = this.head;
    for (let i = 0; i < this.length; i++){
      temp += curNode.val;
      curNode = curNode.next;
    }
    return temp / this.length;
  }
}

// module.exports = LinkedList;
