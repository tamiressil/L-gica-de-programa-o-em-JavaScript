/*Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final:

 */

alert("Principal função do programa é ler 4 notas de um aluno e dar a nota final")
 var nota1, nota2, nota3, soma;
 var nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
 var nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
 var nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "));
  soma = nota1 + nota2 + nota3;
 alert("Sua nota final é: " + soma / 3)