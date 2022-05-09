function adicionaPaciente(event) {
    event.preventDefault(); // preventDefault() desabilita a função padrão do elemento, no caso o botão do formulário.
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);    

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = criaTr(paciente);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // Joga tudo contido no elemento "pacienteTr" para dentro da tabela, no HTML.
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

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Preencha o nome do(a) paciente! ")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é inválido! ");
    }

    if(paciente.peso.length == 0){
        erros.push("Preencha o peso do(a) paciente! ")
    }
    
    if(!validaAltura(paciente.altura)){
        erros.push("A altura é inválida! ");
    }

    if(paciente.altura.length == 0){
        erros.push("Preencha a altura do(a) paciente! ")
    }

    if(paciente.gordura.length == 0){
        erros.push("Preencha a % de gordura! ")
    }

    return erros;
}

function exibeMensagemErro(erros){

    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){

        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", adicionaPaciente);
// addEventListener é uma função que "escuta" uma ação específica (click), em um elemento específico (botao), e executa uma função (adicionaPaciente).



