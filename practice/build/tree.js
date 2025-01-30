/*
code to make tree and do the traversal
*/
// maek the TreeNode class
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
// Create the nodes
var root = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
var node6 = new TreeNode(6);
var node7 = new TreeNode(7);
// Attach the nodes correctly
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
/*
Tree image

        1
       / \
      2   3
     / \  / \
    4   5 6  7


*/
//make the helper function to traverse the tree
var Helper_Fun = /** @class */ (function () {
    function Helper_Fun(max_value) {
        if (max_value === void 0) { max_value = Number.NEGATIVE_INFINITY; }
        this.max_value = max_value;
    }
    Helper_Fun.prototype.helper_dfs = function (node) {
        //base case 
        if (!node) {
            return;
        }
        //print the value
        console.log(node.val);
        //make the recursive call
        this.helper_dfs(node.left);
        this.helper_dfs(node.right);
    };
    Helper_Fun.prototype.tree_print_dfs = function (root) {
        //base case 
        if (!root) {
            console.log(null);
            return;
        }
        //make the recurseive call
        this.helper_dfs(root);
        // return as tree print is done 
        return "Tree is Printed in DFS";
    };
    Helper_Fun.prototype.tree_print_bfs = function (root) {
        /*
        the function to print tree using bfs
        */
        // constarint case 
        if (!root) {
            console.log(null);
            return "Tree is Printed in BFS";
        }
        //make the queue
        var queue = [root];
        //start the traversal
        while (queue.length) {
            //pop the element
            var temp_node = queue.shift();
            //if the temp node is there
            if (temp_node) {
                console.log(temp_node.val);
                //add the value in the queue 
                if (temp_node.left) {
                    queue.push(temp_node.left);
                }
                //add in the queue
                if (temp_node.right) {
                    queue.push(temp_node.right);
                }
            }
        }
        return "Tree is Printed in BFS";
    };
    Helper_Fun.prototype.tree_print_bfs_array = function (root) {
        /*
        The function to print the tree node in the list
        */
        // constraints case 
        //no node 
        if (!root) {
            return [[]];
        }
        // if only one node 
        if (root.left == null && root.right == null) {
            return [[root.val]];
        }
        var result = [];
        //make the queue
        var queue = [root];
        //start the queue loop
        while (queue.length) {
            var queue_length = queue.length;
            var node_list = [];
            for (var i = 0; i < queue_length; i++) {
                var temp_node = queue.shift();
                if (temp_node.val) {
                    node_list.push(temp_node.val);
                }
                if (temp_node.left) {
                    queue.push(temp_node.left);
                }
                if (temp_node.right) {
                    queue.push(temp_node.right);
                }
            }
            result.push(node_list);
        }
        return result;
    };
    Helper_Fun.prototype.get_max_value = function (root) {
        /*
        The function to get the max value from the tree
        */
    };
    Helper_Fun.prototype.helper_dfs_max = function (node) {
        /*
        The function to use recursive dfs approach to get the max node value
        */
        //base case 
        if (!node) {
            return this.max_value;
        }
        //make the recustions calls
        var left = this.helper_dfs_max(node.left);
        var right = this.helper_dfs_max(node.right);
        //make the max value
        this.max_value = Math.max(this.max_value, left, right);
        // Return the max value found so far
        return node.val;
    };
    Helper_Fun.prototype.tree_max_value = function (root) {
        /*
        The function to get the max value from the tree
        */
        //base case 
        if (!root) {
            return null;
        }
        //make the recursive call
        this.helper_dfs_max(root);
        return this.max_value;
    };
    return Helper_Fun;
}());
//make the helper function 
var helper_fun = new Helper_Fun();
console.log(helper_fun.tree_print_dfs(root));
console.log(helper_fun.tree_print_bfs(root));
console.log(helper_fun.tree_print_bfs_array(root));
console.log(helper_fun.tree_max_value(root));
