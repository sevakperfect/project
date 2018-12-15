
var matrix = [ 
    [1,1,1,1,1,2,2,1,0,0,4,2,0,0,1,1,1,1,1,1],
    [1,1,2,0,1,0,0,1,1,1,0,1,1,1,1,1,0,2,0,1],
    [1,1,2,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1],
    [1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,3],
    [1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,2,1,1,1],
    [1,0,1,0,2,0,0,0,1,0,0,0,0,2,0,0,0,1,1,1],
    [1,1,2,0,0,0,0,1,1,1,1,1,0,2,0,0,0,0,0,1],
    [1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,3],
    [1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0],
    [1,0,2,2,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,4],
    [0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    [5,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]
]



var side = 20;

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var dinoArr = [];
var jurArr = [];



function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }

            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y);
                xotakerArr.push(xt);
            }

            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y);
                gishatichArr.push(gsh);
            }
            else if (matrix[y][x] == 4) {
                var gr = new Dinozavr(x, y);
                dinoArr.push(gr)
            }
            else if (matrix[y][x] == 5) {
                var gr = new Jur(x, y);
                jurArr.push(gr)
            }
        }
    }
 

}

function drawmatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
      
        }
    }
 
 
}

socket.on("matrix",drawmatrix)