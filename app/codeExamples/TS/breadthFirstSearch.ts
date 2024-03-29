
class node {
    public name: string;
    public x: number;
    public y: number;
    public neighbours: string[];
    public searched: boolean;
    public parent: string;

    constructor(
        name: string,
        x: number,
        y: number
    ) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.neighbours = [];
        this.searched = false;
        this.parent = null;
    }
}

class Grid {
    public nodes: node[];
    public size: number;
    public dictionary: any;
    public start: node;
    public end: node;

    constructor(size: number) {
        this.nodes = [];
        this.size = size;
        this.dictionary = {};
        this.start = null;
        this.end = null;

        for (let n: number = 1; n <= this.size; n++) {
            for (let cell: number = 1; cell <= this.size; cell++) {
                let nodeName: string = n + "," + cell;
                let thisNode = new node(nodeName, cell, n);
                let neighbours = this.FindNeighbours(cell, n);
                thisNode.neighbours = neighbours;
                this.nodes.push(thisNode);
                this.dictionary[nodeName] = thisNode;
            }
        }
    }

    FindNeighbours(x: number, y: number) {
        let u: number = y - 1 >= 1 ? y - 1 : null;
        let d: number = y + 1 <= this.size ? y + 1 : null;
        let l: number = x - 1 >= 1 ? x - 1 : null;
        let r: number = x + 1 <= this.size ? x + 1 : null;
        let neighbours: string[] = [];

        if (u !== null) {
            neighbours.push(u + "," + x);
        }
        if (d !== null) {
            neighbours.push(d + "," + x);
        }
        if (l !== null) {
            neighbours.push(y + "," + l);
        }
        if (r !== null) {
            neighbours.push(y + "," + r);
        }
        return neighbours;
    }

    AddStart(start: string) {
        if (this.dictionary[start] !== undefined) {
            this.start = this.dictionary[start];
        }
        return this.start;
    }

    AddEnd(end: string) {
        if (this.dictionary[end] !== undefined) {
            this.end = this.dictionary[end];
        }
        return this.end;
    }

    PrintPath() {
        let path: string[] = [];
        let text = new String();

        if (this.end !== null) {

            let next: node = this.end;
            path.push(this.end.name);

            while (next.parent !== null) {

                path.push(next.parent);
                next = this.dictionary[next.parent];
            }

            for (let i = path.length - 1; i >= 0; i--) {
                const move: string = path[i];
                text += move

                if (i != 0) {
                    text += " --> ";
                }
            }

        } else {
            text = "Path not found!";
        }

        return text;
    }

    BreadthFirstSearch() {

        let queue: node[] = [];

        if (this.start !== null && this.end !== null) {

            this.start.searched = true;
            queue.push(this.start);

            while (queue.length > 0) {

                let current: any = queue.shift();

                if (current.name === this.end.name) {

                    console.log("Found it! " + current.name);
                    break;

                } else {

                    let neighbours: string[] = current.neighbours;

                    for (let i = 0; i < neighbours.length; i++) {
                        const neighbour: node = this.dictionary[neighbours[i]];

                        if (!neighbour.searched) {
                            neighbour.searched = true;
                            neighbour.parent = current.name;
                            queue.push(neighbour);
                        }
                    }
                }
            }

        } else {
            console.log("Out of range!");
        }
    }
}

//Programe
let grid = new Grid(4);
let start = grid.AddStart("1,1");
let end = grid.AddEnd("3,3");
grid.BreadthFirstSearch();
console.log(grid.PrintPath());