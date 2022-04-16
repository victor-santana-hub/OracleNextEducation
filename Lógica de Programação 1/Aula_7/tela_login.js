
    var loginCadastrado = "alura";
    var senhaCadastrada = "alura321";

    var maximoTentativas = 3;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas){


    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");

    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

        alert("Bem-vindo ao sistema " + loginInformado);
        tentativaAtual = maximoTentativas;

    } else {

        if(tentativaAtual == 3){

            alert("Número de tentativas excedido!");

        } else {

            alert("Login inválido. Tente novamente");

        }
    }

    tentativaAtual++
}