function deadEnd (row)   
{                       
    for (let i = 0; i < row.length; i++)
    {
        if (row[i] != 0) 
        {
            return false
        }
    }
    return true                            
}

function search(graph, start, target, visited, path)
{
    if (start == target)
    {
        path.push(target)
        return path
    }
    visited[start] = true
    if (!deadEnd(graph[start]))
    {
        path.push(start)
    }
    for (let i = 0; i < graph.length; i++)
    {
        if (visited[i] == false && graph[start][i] != 0)
        {
            let thispath = search(graph, i, target, visited, path)
            if (thispath[thispath.length-1] == target)
            {
                return thispath
            }
        }
    }
    path.pop()
    return []
}

function dfs(graph, startNode, targetNode)
{
    let visited = Array(graph.length).fill(false)
    let path = []
    search(graph, startNode, targetNode, visited, path)
    if (path[path.length-1] != targetNode)
    {
        return []
    }
    else 
    {
        return path
    }
}


function fordFulkerson(dm, source, target)
{
    if (dm.length <= 1) return 0 
    let res = dm.slice()
    let maxFlow = 0; 
    
    while (true)
    {
        let flow = Infinity;
        let path = dfs(res,source,target)

        if (path.length < 1) break
        
        for (let node = 0; node < path.length-1; node++)
        {
            flow = Math.min(flow, res[path[node]][path[node+1]]);
        }

        for (let node = 0; node < path.length-1; node++) 
        { 
            res[path[node]][path[node + 1]] -= flow;
            res[path[node + 1]][path[node]] += flow;
        }
        maxFlow += flow;
    }
    return maxFlow;
}
