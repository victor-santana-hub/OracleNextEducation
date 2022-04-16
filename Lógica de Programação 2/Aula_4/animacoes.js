// Variáveis

var screen = document.querySelector("canvas");
var pen = screen.getContext("2d");

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

function animateCircle(){
        
        clearScreen();
        
        if(x>=580){
            way = -1;
        }
        
        if(x<=20){
            way = 1;
        }   
        
        drawCircle(x,20,10);
        x = x + way;
        
    }

function changeSize(){

    clearScreen();
    drawCircle(300,200,size);

    if(size >= 30){
        way = -1;
    }
        else if(size <=20){
        way = 1;
    }

    size = size + way;
    console.log(size)

    
    
}

var size = 20;
var way = 1;
var x = 20;


//setInterval(changeSize, 20); // Muda Tamanho da bolinha
setInterval(animateCircle, 1); // Movimenta bolinha pelo canvas



