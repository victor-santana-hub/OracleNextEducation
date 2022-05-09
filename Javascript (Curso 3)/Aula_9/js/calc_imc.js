var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista"

function calculaImc(peso,altura){

    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(1); // toFixed limita quantas casas decimais depois da vírgula serão mostradas.
}

function validaPeso(peso) {

    if(peso >= 0 && peso < 800){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){

    if(altura >= 0 && altura <= 3){
        return true;
    } else {
        return false;
    }
}
   
// Seleciona todos os elementos html que pertencem a classe "paciente".
var pacientes = document.querySelectorAll(".paciente");
    
// Busca as informações dentro de cada classe, para calcular o imc com os dados.
for(var i = 0; i < pacientes.length; i++){ 

    var paciente = pacientes[i];        
        
    var peso = paciente.querySelector(".info-peso");
    peso = peso.textContent;
        
    var altura = paciente.querySelector(".info-altura");
    altura = altura.textContent; 
        
    var imcTabela = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura); // Condição de teste para valores de peso e altura validos.
        
    if(!pesoValido){ 
        imcTabela.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
        pesoValido = false;
    }
    
    if(!alturaValida){
        imcTabela.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
        teste = false;
    }
        
    if(alturaValida && pesoValido){
        var imc = calculaImc(peso,altura);
        imcTabela.textContent = imc; 
    }
}
