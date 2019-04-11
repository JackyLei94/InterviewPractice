class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  addToHead(value) {
    if (this.head === null) {
      this.addToTail(value);
    }
    const oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
    return this.head;
  }

  addToTail(value) {
    // Optimized this method by tasking LinkedList instances to keep track
    // of tail node. Normally would have to traverse the LinkedList starting
    // from the head node until the tail is found.
    if (this.head === null) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    return this.head;
  }

  removeTail() {
    let currNode = this.head.next;
    let prevNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return this.head;
    }
    while (currNode !== null) {
      if (currNode === this.tail) {
        prevNode.next = null;
        this.tail = prevNode;
        return this.head;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    return this.head;
  }

  removeNode(value) {
    // This method assumes there are no duplicates in the LinkedList
    if (this.head.data === value) {
      this.head = this.head.next;
      return this.head;
    }
    if (this.tail.data === value) {
      this.removeTail();
      return this.head;
    }

    let currNode = this.head;
    while (currNode.next !== null) {
      if (currNode.next.data === value) {
        const newNext = currNode.next.next;
        currNode.next.next = null;
        currNode.next = newNext;
        return this.head;
      }
      currNode = currNode.next;
    }
    return this.head;
  }

  visualize() {
    const nodes = [];
    let currNode = this.head;
    while (currNode !== null) {
      nodes.push(currNode.data);
      currNode = currNode.next;
    }
    return nodes.join(' -> ');
  }
}

const sumLists = (list1, list2) => {
  // list1 and list2 may not be the same length
  let sumLists = new LinkedList;

  let currSumList = sumLists.head;
  let currList1 = list1.head;
  let currList2 = list2.head;
  let digit = 0;
  let carryOver = 0;
  
  while (currList1 || currList2) {
    let sum = currList1.data + currList2.data;
    digit = sum % 10;
    currSumList.data = digit + carryOver;
    
    carryOver = sum >= 10 ? 1 : 0; 
    currSumList = currSumList.next;
    currList1 = currList1.data ? currList1.next : currList1;
    currList2 = currList2.data ? currList2.next : currList2;
  }

  return sumLists.head;
};

module.exports = LinkedList;
