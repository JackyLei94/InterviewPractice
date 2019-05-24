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