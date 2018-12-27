
weather = "Garun";
var socket = io.connect('http://localhost:3000');
var socket = io();
var button = document.getElementsByClassName('weather');
var side = 10;


socket.on("weather", function (data) {
    weather = data;
});

function setup() {
    frameRate(5);
    createCanvas(50 * side, 50 * side);
    background('#acacac');



}

function drawmatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1 && weather != "Dzmer") {
                fill("green");
            }
            else if (matrix[y][x] == 1 && weather == "Dzmer") {
                fill("white");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2 && weather == "Dzmer") {
                fill("pink");
            }
            else if(matrix[y][x] == 2 && weather != "Dzmer"){
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5 && weather != "Dzmer") {
                fill("blue");
            }
            else if (matrix[y][x] == 5 && weather == "Dzmer") {
                fill("#8efff0");
            }
            rect(x * side, y * side, side, side);

        }
    }


}
socket.on("matrix", drawmatrix)

function winterF(){
    sockets.emit("poxir exanak@",weather);
}
button.onclick = winterF;



 

