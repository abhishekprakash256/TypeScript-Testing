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

make the dfs search 

keep a visisted set to check for the node 

and add that in the set 

next time traverse the visted and if there terminate the loop 


*/


class Solution
{

    graph : Map<number, number[]> ; //declare the graph

    constructor(graph :  Map<number, number[]> = new Map())
    {
        this.graph = graph ; 
    }


    make_graph(edges: number[][])

    {
        //make the graph dict 

        for (const [a,b] of edges)
        {
            if (!this.graph.has(a)) 
            
            {
                this.graph.set(a, []);
            }

            if (!this.graph.has(b)) 

            {
                this.graph.set(b, []);
            }

            this.graph.get(a)?.push(b);
            this.graph.get(b)?.push(a);
        }


    }

}
 



class Solution_alternate {
    graph: { [key: number]: number[] }; // Declare the graph as an object

    constructor(graph: { [key: number]: number[] } = {}) {
        this.graph = graph;
    }

    make_graph(edges: number[][]) {
        for (const [a, b] of edges) {
            if (!this.graph[a]) {
                this.graph[a] = [];
            }
            if (!this.graph[b]) {
                this.graph[b] = [];
            }
            this.graph[a].push(b);
            this.graph[b].push(a);
        }
    }
}





let test1: number[][] = [[0,1],[0,2],[0,3],[1,4]] ; 
 

const sol = new Solution() ;
sol.make_graph(test1) ; 

console.log(sol.graph) ; 


const sol_alt = new Solution_alternate() ; 

sol_alt.make_graph(test1) ; 

console.log(sol_alt.graph) ;




