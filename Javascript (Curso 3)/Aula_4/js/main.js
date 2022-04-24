var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista"

function calculaImc(){
    
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
            var imc = peso / (altura*altura);
            imcTabela.textContent = imc.toFixed(1); // toFixed limita quantas casas decimais depois da vírgula serão mostradas.
        }
    }
}


function adicionaPaciente(event) {
    event.preventDefault(); // preventDefault() desabilita a função padrão do elemento, no caso o botão do formulário.
    
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    var pacienteTr = document.createElement("tr"); // createElement, cria um elemento no html com a tag passada no parâmetro.
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = 0;
    
    pacienteTr.appendChild(nomeTd); // appendChild, move o elemento especificado no parâmetro para dentro do elemento pai. nomeTd vira filho da tag "tr".
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // Joga tudo contido no elemento "pacienteTr" para dentro da tabela, no HTML.
    
    
    
}

calculaImc(); 

var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", adicionaPaciente);
// addEventListener é uma função que "escuta" uma ação específica (click), em um elemento específico (botao), e executa uma função (adicionaPaciente).



