const isPalindrome = list => {
  let currentNode = list.head;
  let count = 0
  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  }

  currentNode = list.head;
  let stack = [];

  for (let i = 0; i < parseInt(count/2); i++) {
    stack.push(currentNode.data);
    currentNode = currentNode.next;
  }

  currentNode = count % 2 ? currentNode.next : currentNode;

  for (let i = 0; i < parseInt(count/2); i++) {
    if (stack.pop() !== currentNode.data) {
      return false;
    }
    currentNode = currentNode.next; 
  }

  return true;
};