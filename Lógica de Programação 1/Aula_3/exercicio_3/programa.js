var tanque = 40;
var caminhoComGasolina = 480;
var caminhoComAlcool = 300;
var consumoDeGasolina = caminhoComGasolina / tanque;
var consumoDeAlcool = caminhoComAlcool / tanque;

//Escreve as médias de consumo
document.write("O consumo médio de Gasolina é de " + Math.round(consumoDeGasolina) + " km/L!")
document.write("<br>");
document.write("O consumo médio de Alcool é de " + Math.round(consumoDeAlcool) + " km/L!");