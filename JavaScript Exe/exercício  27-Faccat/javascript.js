/*Ler um valor e escrever se é positivo, negativo ou zero.*/


alert ("Definir se o valor é zero, positivo ou negativo")
var valor 
valor = parseFloat(prompt("Escreva o valor:"))
if (valor == 0 ){
alert("O valor é zero")
}else 
if  (valor > 0 ){
alert ("O valor é positivo ")
}else{
alert ("O valor é negativo")
}
