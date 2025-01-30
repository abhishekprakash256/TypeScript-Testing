/*
code to make tree and do the traversal
*/


// maek the TreeNode class
class TreeNode
{
	val : number ; 
	left : TreeNode | null ; 
	right : TreeNode | null ;


    constructor(val: number , left : TreeNode | null = null , right : TreeNode | null = null ) {
        this.val = val ;
        this.left = left ; 
        this.right = right ;

    }
}


// Create the nodes
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);


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

class Helper_Fun

	
	{	

	max_value : number ; 

	 constructor(max_value : number = Number.NEGATIVE_INFINITY ) {
        this.max_value = max_value ;

    }



	helper_dfs(node: TreeNode | null) : void
	{

	//base case 
	if (!node) 
		{
			return ;
		}

		//print the value
		console.log(node.val) ;

		//make the recursive call
		this.helper_dfs(node.left) ; 

		this.helper_dfs(node.right) ;

	}

	tree_print_dfs( root : TreeNode | null )
	
	{
		//base case 
		if (!root)
			{
				console.log(null) ;
				return
			} 

		//make the recurseive call
		this.helper_dfs(root) ;

		// return as tree print is done 
		return "Tree is Printed in DFS"
	}


	tree_print_bfs(root : TreeNode | null) 
	
	{ 
		/*
		the function to print tree using bfs
		*/

		// constarint case 
		if (!root)
		{
			console.log(null) ;

			return "Tree is Printed in BFS"
		}

		//make the queue
		let queue : (TreeNode | null)[] = [root];

		//start the traversal
		while (queue.length) 
		{
			//pop the element
			let temp_node = queue.shift() ;

			//if the temp node is there
			if (temp_node)
			{
				console.log(temp_node.val) ;

				//add the value in the queue 
				if (temp_node.left) {

				queue.push(temp_node.left) ;

				}
				
				//add in the queue
				if (temp_node.right) {

				queue.push(temp_node.right) ;	
				
				}
			}





		}

		return "Tree is Printed in BFS"

	}

	tree_print_bfs_array(root: TreeNode | null)
	
	{
		/*
		The function to print the tree node in the list
		*/

	// constraints case 

	//no node 
	if (!root)
	{
		return [[]] ;
	}

	// if only one node 
	if (root.left == null && root.right == null)

	{
		return [[root.val]] ;

	}

	let result : number[][] = []

	//make the queue
	let queue : (TreeNode|null)[] = [root] ;

	//start the queue loop
	while (queue.length)

	{
		let queue_length = queue.length ;

		let node_list: number[] = [] ;

		for (let i = 0; i < queue_length; i++)
			
			

			{
				let temp_node = queue.shift() ;

			if (temp_node.val)
			
			{
				node_list.push(temp_node.val) ;
			}

			if (temp_node.left)
			{
				queue.push(temp_node.left) ;
			}

			if (temp_node.right)

			{
				queue.push(temp_node.right) ;
			}
		}

		result.push(node_list)

	}

	return result

	}

	
	get_max_value(root: TreeNode | null)
	
	{

	/*
	The function to get the max value from the tree
	*/


	}

	helper_dfs_max(node : TreeNode | null )
		
		{
		/*
		The function to use recursive dfs approach to get the max node value
		*/

		//base case 
		if (!node) 
		{
			return this.max_value ; 
		}

		//make the recustions calls
		let left = this.helper_dfs_max(node.left) ;
		let right = this.helper_dfs_max(node.right) ;

		//make the max value
		this.max_value = Math.max(this.max_value, left, right);

        // Return the max value found so far
        return node.val;

		}

	tree_max_value(root : TreeNode | null )
		
		{
		/*
		The function to get the max value from the tree
		*/

		//base case 
		if (! root )
		{
			return null ;
		}

		//make the recursive call
		this.helper_dfs_max(root) ; 

		return this.max_value ;


		}



		tree_max_value_bfs(root : TreeNode | null) 

		{
		/*
		The function to get the max value from the tree using bfs
		*/

		// constarints case 
		if (!root) 
		{
			return null ; 
		}

		// set the max value of var
		let max_value : number = Number.NEGATIVE_INFINITY ; 

		// make the queue 
		let queue : ( TreeNode | null )[] = [root] ;

		// start the traversal 
		while (queue.length)

		{	
			let queue_length = queue.length ; 

			let temp_node = queue.shift() ; 

			for (let i = 0 ; i <= queue_length ; i ++ )
			{
				if (temp_node.val)
				{	
					// get the max value 
					max_value = Math.max(max_value, temp_node.val) ; 
				}

				if (temp_node.left)
				{
					queue.push(temp_node.left) ; // push the left value
				}

				if (temp_node.right)
				{
					queue.push(temp_node.right) ; // push the right value 
				}
			}

		}



		return max_value

	}
	
}



//make the helper function 
const helper_fun = new Helper_Fun() ;
console.log(helper_fun.tree_print_dfs(root)) 
console.log(helper_fun.tree_print_bfs(root))
console.log(helper_fun.tree_print_bfs_array(root))
console.log(helper_fun.tree_max_value(root))
console.log(helper_fun.tree_max_value_bfs(root))