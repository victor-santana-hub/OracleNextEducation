// Variáveis

var screen = document.querySelector("canvas");
var pen = screen.getContext("2d");

pen.fillStyle = "gray";
pen.fillRect(0,0,600,400);

var size = 10;

test = false;

function draw(event) {
    
    var color = document.querySelector("input");

    var x = event.offsetX;
    var y = event.offsetY;

    screen.onmousedown = function() {
        test = true;
    }

    screen.onmouseup = function() {
        test = false;
    }

    if(test) {

        pen.fillStyle = color.value;
        pen.beginPath();
        pen.arc(x,y,size,0,2*3.14);
        pen.fill();
    }
}

screen.onmousemove = draw;