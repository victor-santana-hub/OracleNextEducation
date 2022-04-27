var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista"

function calculaImc(peso,altura){

    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(1); // toFixed limita quantas casas decimais depois da vírgula serão mostradas.

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
    
    var teste = true; // Condição de teste para valores de peso e altura validos.
        
    if(peso <= 0 || peso >= 800){ // Condição " || " = OU lógico. Uma das condições tem de ser true para executar o if.
            
        imcTabela.textContent = "Peso Inválido!";
         paciente.classList.add("paciente-invalido");
        teste = false;

    }
    
    if(altura <= 0 || altura >= 3){
    
          imcTabela.textContent = "Altura Inválida!";
         paciente.classList.add("paciente-invalido");
        teste = false;
    }
        
    if(teste){
          var imc = calculaImc(peso,altura);
         imcTabela.textContent = imc; 
    }
}
