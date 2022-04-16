// Variáveis
var ano = 2022;

// Idade 
document.write("Victor tem " + (ano - 1999) + " anos! <br>");
document.write("Alessandra tem " + (ano - 1993) + " anos! <br>");
document.write("Bernadete tem " + (ano - 1966) + " anos! <br>");

ano = 2025;

document.write("<br> Em " + ano + "<br>")
document.write("Victor terá " + (ano - 1999) + " anos! <br>");
document.write("Alessandra terá " + (ano - 1993) + " anos! <br>");
document.write("Bernadete terá " + (ano - 1966) + " anos! <br>");

//Média Idades
var idadeVictor = ano - 1999;
var idadeAlessandra = ano - 1993;
var idadeBernadete = ano - 1966;
var media = ((idadeVictor + idadeAlessandra + idadeBernadete)/3);

document.write('<br>')
document.write("A média das idades é " + Math.round(media) + "."); //Math.round arredonda o valor.