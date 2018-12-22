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
var fs = require('fs');



app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
matrix = [];
matrix = fillMatrix(50, 50);
function fillMatrix(n, m) {
    var matrix = []
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i].push(0)

        }
    }
    return matrix
}

for (var a = 0; a < 450; a++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 1
}

for (var b = 0; b < 550; b++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 2
}

for (var c = 0; c < 50; c++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 3
}

for (var d = 0; d < 50; d++) {
    var x = Math.floor(Math.random() * 50)
    var y = Math.floor(Math.random() * 50)
    matrix[y][x] = 4
}


var xy = Math.floor(Math.random() * 50)
var yx = Math.floor(Math.random() * 50)
matrix[y][x] = 5


io.on('conection', function (socket) {

});



grassArr = [];
xotakerArr = [];
gishatichArr = [];
dinoArr = [];
jurArr = [];
CnvacGishatich = 0;
CnvacXotaker = 0;
CnvacXot = 0;
emergedWatter = 0;
BornedDino = 0;


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
weather = "Garun";
function exanak() {
    if (weather == "Dzmer") {
        weather = "Garun"
    }
    else if (weather == "Garun") {
        weather = "Amar"
    }
    else if (weather == "Amar") {
        weather = "Ashun"
    }
    else if (weather == "Ashun") {
        weather = "Dzmer"
    }
    io.sockets.emit("weather", weather)
}
setInterval(exanak, 6000);


function serverayinDraw() {


    for (var i in grassArr) {
        grassArr[i].mult();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].mult();
        xotakerArr[i].eat();
        xotakerArr[i].move();
        xotakerArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].mult();

        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].die();
    }
    for (var i in dinoArr) {
        dinoArr[i].eat();
        dinoArr[i].move();
        dinoArr[i].mult();
        dinoArr[i].kataxel();

        dinoArr[i].die();
    }
    // for (var i in jurArr) {
    //     jurArr[i].mult();
    //     jurArr[i].tsunami();
    // }
    io.sockets.emit("matrix", matrix)
}
setInterval(serverayinDraw, 100);
var obj = {"info":[] };
function main(){
    var file = "Statistic.json"
    obj.info.push({"Num of borned Grasseater": CnvacXotaker,"Num of borned Predators": CnvacGishatich, "Num of emerged Grass": CnvacXot," Num of emerged Watter": emergedWatter,"Num of borned Dinos":BornedDino});
    fs.writeFileSync(file, JSON.stringify(obj,null,4));
}
setInterval(main,1000)