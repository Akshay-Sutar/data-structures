const tree = require("./tree");

function inorderTraversal(tree) {
  let data = [];

  traverseTree(tree);

  function traverseTree(node) {
    if (node.left) {
      traverseTree(node.left);
    }
    data.push(node.data);
    if (node.right) {
      traverseTree(node.right);
    }
    return;
  }

  return data;
}

let inorderTraversedData = inorderTraversal(tree);
console.log(inorderTraversedData);
