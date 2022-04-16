//Funções

function breakLine() {

    document.write("<br>");
    }

function print(text) {

    document.write(text);
    breakLine();
}

function sorteia(n){
   return Math.round(Math.random() * n);
}

// Variáveis

var numeroPensado = sorteia(10);
var chute = parseInt(prompt("Digite o seu chute, entre 0 e 10!"));

if(chute == numeroPensado){
    print("Você acertou!");
    
} else {
    if (chute > numeroPensado){
        print("Você errou :( <br> Chutou um número maior!");
    }
       else {
        print("Você errou :( <br> Chutou um número menor!")
    }

}
