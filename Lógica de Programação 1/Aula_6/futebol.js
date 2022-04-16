//Funções

function breakLine() {

    document.write("<br>");
    }

function print(text) {

    document.write(text);
    breakLine();
}


//Funções 
var vitorias = parseInt(prompt("Entre com o número de Vitórais"));
var empates = parseInt(prompt("Entre com o número de empates"));
//prompt retorna sempre uma string 
//parseInt() converte o parâmetro que recebe em número
var pontosPassado = 28;

var pontos = (vitorias * 3) + empates;

print("Os pontos do seu time são: " + pontos);

if (pontos<pontosPassado) {

    print("Seu time foi pior que ano passado.");
}

if (pontos==pontosPassado) {

    print("Seu time foi igual ao ano passado.");
}

if (pontos>pontosPassado) {

    print("Seu time foi melhor que ano passado!");
}
