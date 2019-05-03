var isSymmetric = function(root) {
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