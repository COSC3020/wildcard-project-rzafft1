[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12887955&assignment_repo_type=AssignmentRepo)
# Wildcard Project : Ford Fulkerson Algorithm 

The Ford Fulkerson Algorithm finds the 'max flow' in a network / graph. Ford Fulkerson is a greedy algorithm that finds augmenting paths (using DFS) from a residual graph and then updates the flow capacities in the residual graph using the min flow capacity in the current path. The algorithm will repeat this process until there is no longer a path from the start to the target (i.e. capacities are full, therefore a path will no longer exist). 

Implement the Ford Fulkerson Algorithm using the Depth First Search function from the search-in-graphs excersise

## Runtime Analysis

What is the worst-case time complexity ($\Theta$) of the algorithm? Add your
answer, including your reasoning, to this markdown file.

- Depth First Search : In worst case we have to visit every edge of every node in the graph, therefore the time complexity would be $O(V+E)$
- Ford Fulkerson (total time complexity) : We have to visit every edge in the path from the call to DFS to find the max flow. We must also take into account that the max number of iterations through the algorithm will end up being the max flow, therefore the total time complexity is $O(E * (V+E) * f)$


