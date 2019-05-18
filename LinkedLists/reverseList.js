// Iterative solution
const reverseList = head => {
  let curr = head;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

// Recursive solution
const reverseList = head => {
  return helper(head);
}

const helper = (node, prev = null) => {
  if (node === null) {
    return null;
  }
  let temp = node.next;
  node.next = prev;
  return temp === null ? node : helper(temp, node);
}