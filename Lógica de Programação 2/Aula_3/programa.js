// Variáveis

var screen = document.querySelector("canvas");
var pen = screen.getContext("2d");

pen.fillStyle = "gray";
pen.fillRect(0,0,600,400);

var position = 0;
var colors = ["blue", "red", "green"];
var size = 10;

function showDot(event) {

    var x = event.offsetX;
    var y = event.offsetY;

    var shift = event.shiftKey;
    var alt = event.altKey;
    
    if(shift && size + 10 <= 40){
        
        size = size + 10;
    }
    
    if(alt && size - 5 >= 10){
        
        size = size - 5;
    }
    
        pen.fillStyle = colors[position];
        pen.beginPath();
        pen.arc(x,y,size,0,2*3.14);
        pen.fill();
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

screen.onclick = showDot;
screen.oncontextmenu = changeColor;