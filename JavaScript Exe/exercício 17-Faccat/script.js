/*Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.*/

alert("Principal função do programa é ler 2 notas de um aluno e falar se ele fou aprovado ou não");
var nota1, nota2, soma;
var nota1 = parseFloat(prompt("Digite a  primeira nota do aluno:"));
var nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
media= parseFloat(nota1 + nota2)/2
if(media >= 6){
    alert("A sua nota final é " + media)
    alert(" Você foi aprovado!");
}
else{
    alert(" Você foi reprovado!");
}
