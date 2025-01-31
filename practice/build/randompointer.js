/*

The function to make the random pointer and make a function to copy that
*/
class ListNode {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}
// Creating nodes
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
// Connecting next pointers
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// Connecting random pointers
node1.random = node3; // 1 -> 3
node2.random = node1; // 2 -> 1
node3.random = node5; // 3 -> 5
node4.random = node2; // 4 -> 2
node5.random = node4; // 5 -> 4
class Tree_Fun {
    /*
    The helper method for tree
    */
    print_tree(node) {
        /*
        The function to print the tree
        */
        //base case 
        // no node
        if (!node) {
            return null;
        }
        //ptrs
        let temp = node;
        // start the loop for print the tree
        while (temp) {
            //print the tree value 
            console.log(temp.val);
            //advance the pointer 
            temp = temp.next;
        }
        return "The list is printed ";
    }
    copyRandomList(head) {
        /*
        The function to make the copy of the tree
        */
        // comstraints case 
        // no node 
        if (!head) {
            return null;
        }
        // one node 
        if (head.next == null) {
            let newNode = new ListNode(head.val);
            return newNode;
        }
        // make the hash map 
        //const mapper = new Map<number, number>();
        let mapper = new Map();
        // make the temp node 
        let temp = head;
        // make the mapper
        while (temp) {
            let tempNode = new ListNode(temp.val);
            mapper.set(temp, tempNode);
            temp = temp.next;
        }
        let curr = head;
        while (curr) {
            let copy = mapper.get(curr); // make assignmnet
            copy.next = mapper.get(curr.next); // make the copy next
            copy.random = mapper.get(curr.random); // assign the random pointer
            curr = curr.next; // make the next 
        }
        return mapper.get(head);
    }
}
const tree_fun = new Tree_Fun();
console.log(tree_fun.print_tree(node1));
console.log(tree_fun.copyRandomList(node1));
