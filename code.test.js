const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var dm1 = [
[0,20,15,20,0,0,0,0],
[0,0,0,0,12,0,0,0],
[0,0,0,0,0,10,8,0],
[0,0,10,0,0,0,15,0],
[0,0,10,0,0,10,0,0],
[0,0,0,0,0,0,0,30],
[0,0,0,0,0,0,0,30],
[0,0,0,0,0,0,0,0]
]

assert(JSON.stringify(fordFulkerson(dm1, 0, 7)) == 43) 

dm2 = [    
[0,10,0,10,0,0],  
[0,0,4,2,8,0],   
[0,0,0,0,0,10],   
[0,0,0,0,9,0],  
[0,0,6,0,0,10],   
[0,0,0,0,0,0]
]

assert(JSON.stringify(fordFulkerson(dm2, 0, 5)) == 19) 

dm3 = [
[0,10,12,0],
[0,0,0,10],
[0,5,0,10],
[0,0,0,0]
]

assert(JSON.stringify(fordFulkerson(dm3, 0, 3)) == 20) 

dm4 = [
[0,10,0],
[0,0,5],
[0,0,0]
]
    
assert(JSON.stringify(fordFulkerson(dm4, 0, 2)) == 5) 

dm5 = [
[0,10],
[0,0]
]

assert(JSON.stringify(fordFulkerson(dm5, 0, 1)) == 10) 

dm6 = [
[0]
]

assert(JSON.stringify(fordFulkerson(dm6, 0, 0)) == 0) 

dm7 = []

assert(JSON.stringify(fordFulkerson(dm6, 0, 0)) == 0) 
