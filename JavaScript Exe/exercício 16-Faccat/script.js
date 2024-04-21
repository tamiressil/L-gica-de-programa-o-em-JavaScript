/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra.*/

var macas, quantidademaças
 
alert("Valor compradas da quantidade de maças");
quantidademaças = parseInt(prompt("Digite a quantidade de maças"));
macas = (1.30 * quantidademaças);
duzias = (1 * quantidademaças)
if (quantidadedemaças >= 12) {
    alert("O custo foi de:R$" + duzias);
}
else {
    alert("O custo foi de:R$" + maças);
}
 