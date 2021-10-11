const tree = require('./tree');

function postOrderTraversal(tree) {
    let data = [];
    traverseTree(tree);
    return data;

    function traverseTree(node)
    {
        if (node.left) {
            traverseTree(node.left);
        }

        if (node.right) {
            traverseTree(node.right);
        }

        data.push(node.data);
        return;
    }
}

let postOrderTraversedData = postOrderTraversal(tree);
console.log(postOrderTraversedData);