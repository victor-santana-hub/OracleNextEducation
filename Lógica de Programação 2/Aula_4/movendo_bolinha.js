// Variáveis

var screen = document.querySelector("canvas");
var pen = screen.getContext("2d");

var x = 300;
var y = 200;
var increase = 10;

var up = 38;
var down = 40;
var left = 37;
var right = 39;

pen.fillStyle = "lightgray";
pen.fillRect(0,0,600,400);

function drawCircle(x,y,size) {

    pen.fillStyle = "blue";
    pen.beginPath();
    pen.arc(x,y,size,0,2*Math.PI);
    pen.fill();
}

function clearScreen(){

    pen.clearRect(0,0,600,400);

}

function updateScreen(){

    clearScreen(0,0,600,400);
    drawCircle(x,y,20);

}

function listenToKeyboard(event){


    var key = event.keyCode;

    if(key == left){
        x = x - increase;
    }
        else if (key == right){
            x = x + increase;
        }
            else if(key == up) {
                y = y - increase;
            }
                else if(key == down){
                    y = y + increase;
                }
}

setInterval(updateScreen, 5);
document.onkeydown = listenToKeyboard;