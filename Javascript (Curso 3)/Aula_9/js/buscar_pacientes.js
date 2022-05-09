//AJAX, fazer requisições com o JavaScript de modo assíncrono;

var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    var erroAjax = document.querySelector("#erro-ajax");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //Transforma do formato json para um objeto javascript
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");        
        }

    });

    xhr.send();
})
