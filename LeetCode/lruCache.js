let Node = function(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.lruCount = 0;
  this.tail;
  this.head;
};

LRUCache.prototype.get = function(key) {
  if (this.cache[key]) {
    const nodeToMove = this.cache[key];
    if (this.head === nodeToMove && this.head !== this.tail) {
      this.head = this.head.next;
      this.head.prev = null;
      nodeToMove.next = null;
      nodeToMove.prev = this.tail;
      this.tail.next = nodeToMove;
      this.tail = this.tail.next;
    } else if (this.tail !== nodeToMove) {
      nodeToMove.prev.next = nodeToMove.next;
      nodeToMove.next.prev = nodeToMove.prev;
      nodeToMove.prev = this.tail;
      nodeToMove.next = null;
      this.tail.next = nodeToMove;
      this.tail = nodeToMove;
    }
    return nodeToMove.val;
  }
  return -1;
}

LRUCache.prototype.put = function(key, value) {
  // Check cache for key
  const keyExist = this.cache[key] === undefined ? false : true;

  // Create node
  let node = new Node(key, value);

  // Add node (always add to tail)
  if (this.lruCount === 0) { 
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  };
  this.lruCount++;

  // Remove old nodes if exist 
  if (keyExist) {
    // If old node is head
    if (this.head === this.cache[key]) {
      const toDelete = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      toDelete.next = null;
    } else {
      this.cache[key].prev.next = this.cache[key].next;
      this.cache[key].next.prev = this.cache[key].prev;
      this.cache[key].prev = null;
      this.cache[key].next = null;
    }
    this.lruCount--;
  }

  // Delete leastRecentlyUsed
  if (this.lruCount > this.capacity) {
    const toDelete = this.head;
    this.head = this.head.next
    this.head.prev = null;
    toDelete.next = null;
    delete this.cache[toDelete.key];
    this.lruCount--;
  }

  // Update Cache
  this.cache[key] = node;  
};