function adicionaPaciente(event) {
    event.preventDefault(); // preventDefault() desabilita a função padrão do elemento, no caso o botão do formulário.
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);    
    
    var pacienteTr = criaTr(paciente);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // Joga tudo contido no elemento "pacienteTr" para dentro da tabela, no HTML.
        
    form.reset();
}

function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criaTr(paciente){

    var pacienteTr = document.createElement("tr"); // createElement, cria um elemento no html com a tag passada no parâmetro.
    pacienteTr.classList.add("paciente");

    // appendChild, move o elemento especificado no parâmetro para dentro do elemento pai. nomeTd vira filho da tag "tr".
    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome")); 
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criaTd(info,classe){

    var td = document.createElement("td");
    td.textContent = info;
    td.classList.add(classe);

    return td;
}

var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", adicionaPaciente);
// addEventListener é uma função que "escuta" uma ação específica (click), em um elemento específico (botao), e executa uma função (adicionaPaciente).



