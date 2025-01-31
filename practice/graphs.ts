/*
The function to epxlore the graph problems in type script

*/


//solve the number of island problem 



function helper_dfs(i : number , j : number, grid: string[][] ) 
{
	/*
	The function to search the grid using dfs 
	*/

	// base case 
	if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == "0")
	{
		return null ;
	}

	// mark the grid 
	grid[i][j] = "0"

	//make the recursive helper dfs call
	helper_dfs(i-1, j , grid) ; // up
	helper_dfs(i + 1, j , grid) ; // down 
	helper_dfs(i , j - 1 , grid) ; // left
	helper_dfs(i , j + 1 , grid) ; // right

};


function numIslands(grid: string[][]): number {

	/*
	The function to find the number of island in the grid grap
	passes leetcode 
	*/

	//constaints case 
	if ((grid.length == 1) && (grid[0].length) == 1) 
	{
		if ((grid[0][0]) == "1" )
		{
			return 1 ; 
		}

		else 
		{
			return 0 ;
		}
	}

	//make the vars
	let num_island : number = 0 ;

	//make the iteration and recursive call
	for (let i = 0 ; i <= grid.length - 1 ; i ++ )

	{
		for (let j = 0 ; j <= grid[0].length -1 ; j ++ )
		{
			//pass the value that is island 
			if (grid[i][j] == "1" ) 
			{
				num_island += 1 ;
			}

			//recursion call
			helper_dfs(i,j,grid)  ; 
		}
	}

	return num_island ; 

    
};


/*

You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and
list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge 
between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false 
otherwise.

*/


/*
approach -- 

Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]

make it in a hash map 

mapper = { 0 : [1,2,3] , 1 : [4] , 2 : [0] , 3 : [0] , 4 : [1] }


n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]

mapper = {0 : [1] , 1 : [0,2,3,4] , 2 : [1,3] , 3 : [1,2] , 4 : [1] }

how to detect a cycle ? 


we use a queue 

do all the traveral if a value comes back it a cylce ? 

traversal 


queue = [0]

queue_length = len(queue)

for _ in range(queue_length)
temp_node = queue.pop()

marked value ? 








*/