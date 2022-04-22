var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista"

function calculaImc(){
    
    var pacientes = document.querySelectorAll(".paciente");
    
    for(var i = 0; i < pacientes.length; i++){

        var paciente = pacientes[i];        
        
        var peso = paciente.querySelector(".info-peso");
        peso = peso.textContent;
        
        var altura = paciente.querySelector(".info-altura");
        altura = altura.textContent; 
        
        var imcTabela = paciente.querySelector(".info-imc");
    
        var teste = true;
        
        if(peso <= 0 || peso >= 800){
            
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
            var imc = peso / (altura*altura);
            imcTabela.textContent = imc.toFixed(1); 
        }
    }
}


calculaImc();

