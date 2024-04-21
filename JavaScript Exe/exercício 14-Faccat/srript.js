/* Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso 
contrário escrever NÃO É MAIOR QUE 10!? */ 

alert("Vamos colocar  um número e definir  se ele é maior ou menor que 10")
var numero=(prompt("Digite um número:"));
if ( numero >10){
    alert(numero + " é  maior que 10!");
}
else if (numero == 10){
    alert(numero + " é igual a 10!");
}

else{
    alert(numero + " é menor que 10!");
}
