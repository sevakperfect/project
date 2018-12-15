 LivingCreature = require("./LivingCreature.js");
 Grass = require("./Grass.js");
 Xotaker = require("./Xotaker.js");
 Gishatich = require("./Gishatich.js");
 Jur = require("./Jur.js");
 Dinozavr = require("./Dino.js");
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



 
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
 matrix = [ 
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





 grassArr = [];
 xotakerArr = [];
 gishatichArr = [];
 dinoArr = [];
 jurArr = [];

  
    
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
 



function serverayinDraw(matrix) {

    
    for (var i in grassArr) {
       grassArr[i].mult();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].mult();
        xotakerArr[i].eat();
      xotakerArr[i].move();
     xotakerArr[i].die();
    }
    for(var i in gishatichArr){
        gishatichArr[i].mult();
        
        gishatichArr[i].move();
       gishatichArr[i].eat();
        gishatichArr[i].die();
    }
    for( var i in dinoArr){
        dinoArr[i].eat();
        dinoArr[i].move();
        dinoArr[i].mult();
        dinoArr[i].kataxel();

        dinoArr[i].die();
    }
    for(var i in jurArr){
        jurArr[i].mult();
        jurArr[i].tsunami();
    }
 io.sockets.emit("matrix",matrix)
}
setInterval(serverayinDraw,100);