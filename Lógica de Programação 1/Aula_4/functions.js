//Funções
function breakLine() {

    document.write("<br><br>");
}

function print(text) {

    document.write(text);
    breakLine();

}

//Variáveis
var ano = 2022;
idadeVictor = 22;
idadeAna = 29;
diferençaIdade = idadeVictor - idadeAna;

// Idade 
print("Victor tem " + (ano - 1999) + " anos!");
print("Alessandra tem " + (ano - 1993) + " anos!");
print("Bernadete tem " + (ano - 1966) + " anos!");

print("Nossa diferença de idade é de " + diferençaIdade + " anos!");
