"use strict";
class Node {
    constructor(name,x,y){
        this.name = name;
        this.x = x;
        this.y = y;
        this.neighbours = [];
        this.searched = false;
        this.parent = null;
    }   
}

class Neighbours {
    constructor(
        u,d,l,r
    ){
        this.u = u;
        this.d = d;
        this.l = l;
        this.r = r;
    }
}


function findNeighbours(size,x,y){

    let u = y-1 >= 1 ? y-1 : null;
    let d = y+1 <= size ? y+1 : null;
    let l = x-1 >= 1 ? x-1 : null;
    let r = x+1 <= size ? x+1 : null;
    var neighbours = [];

    if(u!==null){
        neighbours.push(new Node(u+","+x, x, u));
    }
    if(d!==null){
        neighbours.push(new Node(d+","+x, x, d));
    }
    if(l!==null){
        neighbours.push(new Node(y+","+l, l, y));
    }
    if(r!==null){
        neighbours.push(new Node(y+","+r, r, y));
    }

    return neighbours;

}
class Grid {
    constructor(size, start, end)
    {
        this.nodes = [];
        this.size = size;
        this.dictionary = {};
        this.start = start;
        this.end = end;

        for (let n = 1; n <= this.size; n++) {
            for (let cell = 1; cell <= this.size; cell++) {
                let nodeName = n+","+cell;
                let node = new Node(nodeName, cell, n);
                let neighbours = findNeighbours(this.size, cell, n);
                
                node.neighbours = neighbours;

                node.neighbours.forEach(neighbour => {
                    neighbour.neighbours = findNeighbours(this.size, neighbour.x, neighbour.y);
                });

                this.nodes.push(node);
                this.dictionary[nodeName] = node;
            }
        }
    }
}

var grid = new Grid(4, "1,1", "3,2");
var moves = {};

for (let gridCell = 0; gridCell < grid.nodes.length; gridCell++) {
    const cell = grid.nodes[gridCell];
    if(moves[cell.name] === undefined){
        moves[cell.name] = cell;
    }
    for (let side = 0; side < cell.neighbours.length; side++) {
        const neighbour = cell.neighbours[side];
        
        neighbour.searched = true;

        if(moves[neighbour.name] === undefined){
            moves[neighbour.name] = neighbour;
        }

        if(neighbour.name === grid.end){

            //console.log("Found it");
            //console.log(moves);
            //break;
        }
    }    
}

grid.nodes.forEach(n => {

   
 console.log("parent " + n.name);

 n.neighbours.forEach(ne =>{

    console.log("ne " + ne.name);

    n.neighbours.forEach(ne2=>{
        console.log("ne2 " + ne2.name);
        //console.log(ne2.neighbours);

    })

 })

});