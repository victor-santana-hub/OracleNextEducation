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
    
    function testaNumero() {

        
        if(input.value == segredo){
            alert("Você acertou!!");
            
        } else {
            alert("Você Errou!");
        }
        
    }
    // Variáveis
    
    var segredo = sorteia(10);
    var input = document.querySelector("input");
    var button = document.querySelector("button");

    // Programa
    
    button.onclick = testaNumero;
   
        
       


