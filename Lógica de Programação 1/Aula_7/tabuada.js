//Funções

function breakLine() {

    document.write("<br>");
    }

function print(text) {

    document.write(text);
    breakLine();
}

// Variáveis

var multiplicador = 1;

//for(variável que vai contar; teste lógico ou condição de repetição; incremento da variável);

for(var multiplicador = 1; multiplicador <= 10; multiplicador++){

    print(7 * multiplicador);

}

print("FIM! <br>");

for( var i = 0; i < 10; i++ ) {
    print( "O resultado é " + (2 * i) );
}

breakLine();

var i = 0;

while(i < 10){

    print("O resultado é "+ (2 * i));
    i++;
}