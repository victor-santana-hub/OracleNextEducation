//Funções

function breakLine() {

    document.write("<br>");
    }

function print(text) {

    document.write(text);
    breakLine();
}

function calculaImc(peso, altura) {

    return peso / (altura * altura);

}

//Variáveis

// var imcVictor = calculaImc(76, 1.74); 
// var imcArthur = calculaImc(72, 1.80);
// var imcTotal = calculaImc(76, 1.74) + calculaImc(72, 1.80);

//print("A soma dos imc's é " + Math.round(imcVictor + imcArthur));


//Recebendo valores externos

var nome = prompt("Informe o seu nome:")
var alturaInformada = prompt(nome + ", informe a sua altura (m).");
var pesoInformado = prompt(nome + ", informe seu peso (kg).");
var imc = calculaImc(pesoInformado, alturaInformada);

print(nome + ", o seu IMC é " + imc);

if (imc < 18.5) {
    print("Você está abaixo do peso.")
}

if (imc >= 18.5 && imc <=25){
    
        print("Você está dentro do peso.")
}

if (imc > 25){

    print("Você está acima do peso.")
}