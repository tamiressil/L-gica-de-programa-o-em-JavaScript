/*Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).*/

var valor;
alert("verificando se o valor vai ser positivo ou negativo");
valor = parseInt(prompt("Digite um valor"));
if (valor >= 0) {
    alert("valor é positivo")
}
else {
    alert("valor é negativo")
}