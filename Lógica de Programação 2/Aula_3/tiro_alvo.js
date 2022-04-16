// Variáveis

var screen = document.querySelector("canvas");
var pen = screen.getContext("2d");

pen.fillStyle = "gray";
pen.fillRect(0,0,600,400);

var size = 10;

function drawCircle(x,y,size,color) {

    pen.fillStyle = color;
    pen.beginPath();
    pen.arc(x,y,size,0,2*Math.PI);
    pen.fill();
}

function shoot(event){

    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x);
    console.log(y);
    
    if(300 - size <= x <= 300 + size && 200 - size <= y <= 200 + size){
        
        pen.fillStyle = "gray";
        pen.fillRect(0,0,600,400);
        alert("Você acertou em cheio!");
    }

}

drawCircle(300,200,size+20,"red");
drawCircle(300,200,size+10,"white");
drawCircle(300,200,size,"red");

screen.onclick = shoot;

