// Iterative solution
const inorderTraversal = function(root) {
  const output = [];
  if (root === null) return output;
  
  let stack = [];
  let curr = root;
  
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    output.push(curr.val);
    curr = curr.right;
  }

  return output;
};

// Recursive solution
const inorderTraversal = function(root) {
  const output = [];
  if (root === null) return output;
  dfs(root, output);
  return output;
};

const dfs = (node, output) => {
  if (node.left) {
    dfs(node.left, output)
  }
  
  if (node.val) {
    output.push(node.val);
  }
  
  if (node.right) {
    dfs(node.right, output);
  }
}