//Funções

function breakLine() {

    document.write("<br>");
    }

function print(text) {

    document.write(text);
    breakLine();
}

// Variáveis

var anoCopa = 1930;

while(anoCopa <= 2022){

    print("Teve copa em "+ anoCopa);
    anoCopa = anoCopa + 4 ;
}
print("FIM");

