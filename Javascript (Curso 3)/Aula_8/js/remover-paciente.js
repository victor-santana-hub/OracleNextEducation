var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    var alvoEvento = event.target;
    var paiAlvo = alvoEvento.parentNode;

    paiAlvo.classList.add("fadeOut");

    setTimeout(function(){
        paiAlvo.remove();
    },450)
})