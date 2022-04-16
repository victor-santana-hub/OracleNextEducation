// Variáveis

var screen = document.querySelector("canvas");
var pen = screen.getContext("2d");

pen.fillStyle = "gray";
pen.fillRect(0,0,600,400);

var position = 0;
var colors = ["blue", "red", "green"];
var size = 10;

test = false;

function draw(event) {
    

    var x = event.offsetX;
    var y = event.offsetY;

    screen.onmousedown = function() {
        test = true;
    }

    screen.onmouseup = function() {
        test = false;
    }

    if(test) {

        pen.fillStyle = colors[position];
        pen.beginPath();
        pen.arc(x,y,size,0,2*3.14);
        pen.fill();
    }
}

function changeColor() {
    
    if(position <= 2){
        
        position++;
    } 
    
    if(position == 3){
        position = 0;
    }

    return false;
    
}

screen.onmousemove = draw;
screen.oncontextmenu = changeColor;