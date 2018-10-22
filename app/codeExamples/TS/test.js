//"use strict";
var node = /** @class */ (function () {
    function node(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.neighbours = [];
        this.searched = false;
        this.parent = null;
    }
    return node;
}());
var matrix = /** @class */ (function () {
    function matrix(size) {
        this.nodes = [];
        this.size = size;
        this.dictionary = {};
        this.start = null;
        this.end = null;
        for (var n = 1; n <= this.size; n++) {
            for (var cell = 1; cell <= this.size; cell++) {
                var nodeName = n + "," + cell;
                var thisNode = new node(nodeName, cell, n);
                var neighbours = this.FindNeighbours(cell, n);
                thisNode.neighbours = neighbours;
                this.nodes.push(thisNode);
                this.dictionary[nodeName] = node;
            }
        }
    }
    matrix.prototype.FindNeighbours = function (x, y) {
        var u = y - 1 >= 1 ? y - 1 : null;
        var d = y + 1 <= this.size ? y + 1 : null;
        var l = x - 1 >= 1 ? x - 1 : null;
        var r = x + 1 <= this.size ? x + 1 : null;
        var neighbours = [];
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
    };
    matrix.prototype.AddStart = function (start) {
        if (this.dictionary[start] !== undefined) {
            this.start = this.dictionary[start];
        }
        return this.start;
    };
    matrix.prototype.AddEnd = function (end) {
        if (this.dictionary[end] !== undefined) {
            this.end = this.dictionary[end];
        }
        return this.end;
    };
    matrix.prototype.PrintPath = function () {
        var path = [];
        var text = "";
        if (this.end !== null && this.end.parent !== undefined) {
            var next = this.end;
            path.push(this.end.name);
            while (next.parent !== null) {
                path.push(next.parent);
                next = this.dictionary[next.parent];
            }
            for (var i = path.length - 1; i >= 0; i--) {
                var move = path[i];
                text += move;
                if (i != 0) {
                    text += " --> ";
                }
            }
        }
        else {
            text = "Path not found!";
        }
        return text;
    };
    matrix.prototype.BreadthFirstSearch = function () {
        var queue = [];
        if (this.start !== null && this.end !== null) {
            this.start.searched = true;
            queue.push(this.start);
            while (queue.length > 0) {
                var current = queue.shift();
                if (current.name === this.end.name) {
                    console.log("Found it! " + current.name);
                    break;
                }
                else {
                    var neighbours = current.neighbours;
                    for (var i = 0; i < neighbours.length; i++) {
                        var neighbour = this.dictionary[neighbours[i]];
                        if (!neighbour.searched) {
                            neighbour.searched = true;
                            neighbour.parent = current.name;
                            queue.push(neighbour);
                        }
                    }
                }
            }
        }
        else {
            console.log("Out of range!");
        }
    };
    return matrix;
}());
//Programe
var grid = new matrix(4);
var start = grid.AddStart("1,1");
var end = grid.AddEnd("3,3");
grid.BreadthFirstSearch();
console.log(grid.PrintPath());
