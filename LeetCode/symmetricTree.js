// DFS
const isSymmetric = root => {
  if (!root) {
    return true;
  }
  return helper(root.left, root.right);
}

const helper = (left, right) => {
  if (!left && !right) {
    return true;
  }
  if (!left || !right) {
    return false;
  }
  return left.val === right.val &&
    helper(left.right, right.left) &&
    helper(left.left, right.right);
}

// BFS
const isSymmetric = function(root) {
  let forwardQ = [root];
  let reverseQ = [root];
  
  while (forwardQ.length || reverseQ.length) {
    let forwardNode = forwardQ.shift();
    let reverseNode = reverseQ.shift();
    
    if (forwardNode === null && reverseNode === null) {
      continue;
    }
    if (forwardNode === null || reverseNode === null || forwardNode.val !== reverseNode.val) {
      return false;
    }

    forwardQ.push(forwardNode.left);
    forwardQ.push(forwardNode.right);
    reverseQ.push(reverseNode.right);
    reverseQ.push(reverseNode.left);
  }
  return true;
};