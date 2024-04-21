/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores.*/

alert("Vamos ler o total de eleitores e apresentar  a porcentagem de cada um dos tipos de votos");

var totalEleitores, votosBrancos,votosNulos, votosValidos,porcentagemValidos, porcentagemNulos, porcentagemBrancos;

var  totalEleitores=parseInt(prompt("Digite o total de eleitores: "));
var votosBrancos=parseInt(prompt("Digite o total de votosBrancos "));
var votosNulos=parseInt(prompt("Digite o total de votosNulos "));
var votosValidos=parseInt(prompt("Digite o total de votosValidos "));

var porcentagemBrancos=(votosBrancos/totalEleitores * 100);
var porcentagemNulos=(votosNulos/totalEleitores *100);
var porcentagemValidos=(votosValidos/totalEleitores *100);

alert ("Porcentagem de votos brancos:"+ porcentagemBrancos +"%");
alert("Porcentagem de votos nulos:"+porcentagemNulos+"%");
alert("porcentagem de votos:"+porcentagemValidos+"%");


