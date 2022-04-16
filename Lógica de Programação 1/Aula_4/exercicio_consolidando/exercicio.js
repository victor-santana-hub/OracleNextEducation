//Funções

function breakLine() {

    document.write("<br><hr><br>");
}

function print(text) {

    document.write("<big>" + text + "</big>");
    breakLine();
}

//Variáveis
var anoAtual = 2022;

// Programa

print("Eu nasci em: " + (anoAtual - 23));
print("Ana nasceu em: " + (anoAtual - 30));
print("Bernadete nasceu em: " + (anoAtual - 56));
