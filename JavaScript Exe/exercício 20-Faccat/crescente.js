/*Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.*/

var Valor01,Valor02,resultado;

alert ("Digite os valores pedidos para o programa colocá-los  em ordem crescente");

var Valor01 = parseInt(prompt("Digite o primeiro valor :"));

var Valor02 = parseInt(prompt("Digite o segundo valor :"));

var resultado = parseInt + Valor01 + Valor02;

if(Valor01 > Valor02){
    alert(Valor02 + "," + Valor01);
} else if (Valor01 < Valor02){
    alert(Valor01 + "," + Valor02);
}