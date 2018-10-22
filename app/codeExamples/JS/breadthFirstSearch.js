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
    constructor(size)
    {
        this.nodes = [];
        this.size = size;
        this.dictionary = {};
        
        for (let n = 1; n <= this.size; n++) {
            for (let cell = 1; cell <= this.size; cell++) {
                let nodeName = n+","+cell;
                let node = new Node(nodeName, cell, n);
                let neighbours = findNeighbours(this.size, cell, n);                
                node.neighbours = neighbours;

                this.nodes.push(node);
                this.dictionary[nodeName] = node;
            }
        }
    }

    AddStart(start){

        this.start = this.dictionary[start];
        return this.start;

    }

    AddEnd(end){

        this.end = this.dictionary[end];
        return this.end;
    }
}
//Grid(4, "1,1", "3,2");
var grid = new Grid(4);
var queue = [];

var start = grid.AddStart("1,1");
var end = grid.AddEnd("3,2");
//console.log("Start neighbour")
//console.log(start.neighbours);

grid.start.searched = true;
queue.push(start);

while(queue.length > 0 ){

    var current = queue.shift();

    //console.log(current.name)
    //console.log(end.name)
    //console.log(queue.length);

    if(current.name === end.name) {

        console.log("Found! " +current.name);
        break;
    } else {

        var neighbours = current.neighbours;

        console.log(neighbours.length);

        for (let i = 0; i < neighbours.length; i++) {
            const neighbour = neighbours[i];

            //console.log(neighbour.searched)
            
            if(!neighbour.searched){

                neighbour.searched = true;
                neighbour.parent = current;
                queue.push(neighbour);

                //console.log(neighbour)

            }
        }


    }
}

grid.nodes.forEach(n => {

    console.log(n);
   // console.log("parent " + n.name);

})