const Node = require("./treeNode");

const tree = new Node(100);
const node1 = new Node(50);
const node2 = new Node(150);
tree.left = node1;
tree.right = node2;

const node3 = new Node(25);
const node4 = new Node(75);

node1.left = node3;
node1.right = node4;

const node5 = new Node(125);
const node6 = new Node(175);

node2.left = node5;
node2.right = node6;

module.exports = tree;
