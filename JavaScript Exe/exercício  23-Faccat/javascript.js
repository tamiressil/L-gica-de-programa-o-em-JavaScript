/*Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém
erros, identifique os erros no algoritmo apresentado abaixo:
Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
- para sexo masculino: peso ideal = (72.7 * altura) - 58
- para sexo feminino: peso ideal = (62.1 * altura) - 44.7
inicio
ler nome
ler sexo
se sexo = M então
peso_ideal  (72.7 * altura) - 58
senão
peso_ideal  (62.1 * altura) – 44.7
fim_se
escrever peso_ideal
fim*/

var nome, sexo, altura, peso_ideal;
nome = prompt("Escreva seu nome:");
sexo = prompt("Escreva seu sexo M para Masculino e F para Feminino");
altura = parseFloat(prompt("Escreva a sua altura"));

if (sexo =="M") {
    peso_ideal = (72.7 * altura) - 58;
} else {
    peso_ideal = (62.1 * altura) - 44.7;
}

alert(nome + ", seu peso ideal é de: " + peso_ideal);









