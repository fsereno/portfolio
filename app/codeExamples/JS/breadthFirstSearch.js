"use strict";
class Node {
    constructor(name){
        this.name = name;
        this.sides = []
        this.searched = false;
    }   
}

class Grid {
    constructor(size, start, end)
    {
        this.rows = [];
        this.size = size;
        this.start = start;
        this.end = end;

        for (let row = 1; row <= size; row++) {
            for (let cell = 1; cell <= size; cell++) {
                let node = new Node(row+","+cell);
                let u = row-1 >= 1 ? row-1 : null;
                let d = row+1 <= this.size ? row+1 : null;
                let l = cell-1 >= 1 ? cell-1 : null;
                let r = cell+1 <= this.size ? cell+1 : null;
                
                this.rows.push(node);
                
                if(u!==null){
                    node.sides.push(new Node(u+","+cell));
                }
                if(d!==null){
                    node.sides.push(new Node(d+","+cell));
                }
                if(l!==null){
                    node.sides.push(new Node(row+","+l));
                }
                if(r!==null){
                    node.sides.push(new Node(row+","+r));
                }
            }
        }
    }
}

var grid = new Grid(4, "1,1", "3,2");
var moves = {};

for (let gridCell = 0; gridCell < grid.rows.length; gridCell++) {
    const cell = grid.rows[gridCell];
    if(moves[cell.name] === undefined){
        moves[cell.name] = cell;
    }
    for (let side = 0; side < cell.sides.length; side++) {
        const neighbour = cell.sides[side];
        
        neighbour.searched = true;

        if(moves[neighbour.name] === undefined){
            moves[neighbour.name] = neighbour;
        }

        if(neighbour.name === grid.end){

            console.log("Found it");
            console.log(moves);
            break;
        }
    }    
}

/*for (let gridRow = 0; gridRow < grid.rows.length; gridRow++) {
    const row = grid.rows[gridRow];
    for (let gridCell = 0; gridCell < array.length; gridCell++) {
        const cell = array[gridCell];
        for (let side = 0; side < cell.sides.length; side++) {
            const side = cell.sides[side];
            if(side === grid.end){
                console.log("Found it!");
                break;
            }
        }    
    }
}*/
grid.rows.forEach(row => {

   
 //console.log(row);

});