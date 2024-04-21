/*Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'*/

alert ("calcular se um cliente está com saldo positivo ou negativo")

var conta_cliente ,saldo, debito , credito,  saldo_atual

conta_cliente= parseFloat (prompt("Escreva o numero da conta do cliente:"));
saldo= parseFloat(prompt("Escreva o saldo do cliente:"));
debito= parseFloat(prompt("Escreva o  saldo em débito do cliente:"));
credito=parseFloat(prompt("Escreva o saldo em crédito do cliente"));

saldo_atual= saldo - debito + credito

if (saldo_atual >= 0){
alert ("A conta "+conta_cliente+ "está com o saldo positivo")
}else{
    alert ("A conta "+conta_cliente+ "está com o saldo negativo")
}






