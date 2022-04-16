// Variáveis

var screen = document.querySelector("canvas");
var pen = screen.getContext("2d");

var x;
var y;

var size = 5; // target size

function clearScreen(){

    pen.clearRect(0,0,600,400);

}

function drawCircle(x, y, size, color){

    pen.fillStyle = color;
    pen.beginPath();
    pen.arc(x,y,size,0,2*Math.PI);
    pen.fill();

}

function drawTarget() {

    clearScreen();

    drawCircle(x,y,size*3, "red");
    drawCircle(x,y,size*2, "white");
    drawCircle(x,y,size, "red");

}

function updateScreen(){
    
    x = Math.round(Math.random() * 600);
    y = Math.round(Math.random() * 400);
    drawTarget();

}



function shoot(event){

    var xClick = event.offsetX;
    var yClick = event.offsetY;

    console.log(x,y," Target"); // target position
    console.log(xClick,yClick, " Click"); // click position
    console.log(size)

    if((xClick > x - size)
        && (xClick < x + size)
        && (yClick > y - size)
        && (yClick < y + size)) {
        
        clearScreen();
        alert("Você acertou em cheio!");
    }

}

updateScreen()
setInterval(updateScreen, 1000);
screen.onclick = shoot;



