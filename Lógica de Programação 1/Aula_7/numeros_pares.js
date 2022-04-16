//Funções

function breakLine() {

    document.write("<br>");
    }

function print(text) {

    document.write(text);
    breakLine();
}

// Variáveis
print("<h1>Numeros Pares</h1>")
var numero = 2;

while(numero <= 100){

    print("Este número é par:  "+ numero);
    numero = numero + 2 ;
}
print("FIM");

//Numeros entre 30 a 40

print("<h1>Entre 30 e 40</h1>")
var contador = 30;

while(contador <= 40) {

    if( contador == 33 ) {
    contador = contador + 1;
    }
    else if(contador == 37) {    
        contador = contador + 1;
    }
    else {
    print(contador);
    contador = contador + 1; 
    }
  }

print("FIM");

//De 20 a 0

print("<h1>De 20 a 0</h1>")

var contador2 = 20;

while(contador2 >= 0){
    print(contador2);
    contador2 = contador2 - 1;
}

print("FIM");

//