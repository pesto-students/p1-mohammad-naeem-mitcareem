class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let node5 = new Node(7);
let node4 = new Node(15);
let node3 = new Node(20, node4, node5);
let node2 = new Node(9);
let node1 = new Node(3, node2, node3);




function MaximumDepth(node) {
    if (node == null)
        return 0;

    else {
        // counting total number of left and right nodes 
        countleft = MaximumDepth(node.left)
        countright = MaximumDepth(node.right)

        //adding root node and returning the height 
        if (countleft > countright)
            return (countleft + 1);
        else
            return (countright + 1);

    }
}

console.log(MaximumDepth(node1))