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

class Grid {
    constructor(size)
    {
        this.nodes = [];
        this.size = size;
        this.dictionary = {};
        this.start = null;
        this.end = null;
        
        for (let n = 1; n <= this.size; n++) {
            for (let cell = 1; cell <= this.size; cell++) {
                let nodeName = n+","+cell;
                let node = new Node(nodeName, cell, n);
                let neighbours = this.FindNeighbours(cell, n);                
                node.neighbours = neighbours;
                this.nodes.push(node);
                this.dictionary[nodeName] = node;
            }
        }
    }

    FindNeighbours(x, y) {

        let u = y-1 >= 1 ? y-1 : null;
        let d = y+1 <= this.size ? y+1 : null;
        let l = x-1 >= 1 ? x-1 : null;
        let r = x+1 <= this.size ? x+1 : null;
        var neighbours = [];

        if(u!==null){
            neighbours.push(u+","+x);
        }
        if(d!==null){
            neighbours.push(d+","+x);
        }
        if(l!==null){
            neighbours.push(y+","+l);
        }
        if(r!==null){
            neighbours.push(y+","+r);
        }

        return neighbours;
    }

    AddStart(start){

        this.start = this.dictionary[start];
        return this.start;

    }

    AddEnd(end){

        this.end = this.dictionary[end];
        return this.end;
    }

    PrintPath(){

        var next = this.end;
        var path = [];
        path.push(this.end.name);
        while(next.parent !== null){
    
            path.push(next.parent);
            next = this.dictionary[next.parent];
        }
    
        var text = "";
        path.forEach(move => {
            text += move + " --> ";
        });
    
        return text;
    
    }

    BreadthFirstSearch(){

        var queue = [];
        this.start.searched = true;
        queue.push(this.start);

        while(queue.length > 0 ){

            var current = queue.shift();

            if(current.name === end.name) {

                console.log("Found! " + current.name);
                break;

            } else {

                var neighbours = current.neighbours;

                for (let i = 0; i < neighbours.length; i++) {
                    const neighbour = this.dictionary[neighbours[i]];
                    
                    if(!neighbour.searched){
                        neighbour.searched = true;
                        neighbour.parent = current.name;
                        queue.push(neighbour);
                    }
                }
            }
        }
    }
}

//Programe
let grid = new Grid(4);
let start = grid.AddStart("1,2");
let end = grid.AddEnd("3,2");
grid.BreadthFirstSearch();
console.log(grid.PrintPath());