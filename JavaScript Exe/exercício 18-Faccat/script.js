/*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).*/

alert("Definir se uma pessoa tem o voto obtigatório ou não")
var   AnoAtual, AnoNascimento, idade;
var AnoNascimento=parseInt(prompt("Digite o ano do seu nascimento:"));
var AnoAtual=parseInt(prompt("Digite o ano que você está atualmente :"));
idade=AnoAtual- AnoNascimento;
if(idade<16){
    alert("Você ainda não tem a idade minima para poder votar!");
}
else{
    alert(" Seu voto é obrigatório!")
}