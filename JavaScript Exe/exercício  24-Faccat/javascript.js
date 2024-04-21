/*Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.*/

alert ("Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa e escrever ser salário total")


var salarioFixo, valorVendas, salarioTotal, comissao;

salarioFixo = parseFloat(prompt("Digite o seu salário fixo:"));
valorVendas = parseFloat(prompt("Digite o valor das vendas feitas:"));

if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03;
} else {
    comissao = valorVendas * 0.05;
}

salarioTotal = salarioFixo + comissao;

alert("O seu salário total é: " + salarioTotal);










