    //Funções
      
    function sorteia(n){ //Sorteia um número aleatório entre 0 e "n". Recebe o número máximo que deve ser sorteado.
       return Math.round(Math.random() * n);
    }

    function sorteiaNumeros(quantidade) { //Recebe a quantidade de números que o array "segredos" deve conter, e sorteia um número utilizando a função sorteia().
                                          //Se o número sorteado for diferente de zero, coloca-se esse número no array segredos. Faz isso até preencher o array com a quantidade de números desejada.
                                          //Só adiciona-se o número no array, caso o número sorteado seja diferente dos números já existentes no array.

        var segredos = [];

        var numero = 1;

        while(numero <= quantidade){

            var numeroAleatorio = sorteia(10);

            if(numeroAleatorio !== 0){

                var achou = false;
                
                for(var position = 0; position < segredos.length; position++) {

                    if(segredos[position] == numeroAleatorio){
                        achou = true;
                        break;
                    }    
                }
    
                if(achou == false){
                    segredos.push(numeroAleatorio);
                    numero++;
                }
            }        
        }
    
        return segredos;

    }
    
    function testaNumero() { //Compara o valor recebido por input com todos os valores do array segredos.
                             // Se o valor de input estiver no array, mostra ACERTOU, caso não esteja, mostra ERROU.

        var achou = false;

        for(var position = 0;position < segredos.length;position++){

            if(input.value == segredos[position]){

                alert("Você ACERTOU!");
                achou = true;
                break;

            }
        }

        if(achou == false){

        alert("Você ERROU!");
        }
        
        input.value = "";
        input.focus();

    }

    // Variáveis
    
    var segredos = sorteiaNumeros(3);

    var input = document.querySelector("input");
    var button = document.querySelector("button");

    // Programa

    input.focus();
    button.onclick = testaNumero;
   
        
       


