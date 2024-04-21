/*Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'.*/

alert ("Calcular a quantidade média de um estoque com o fim de saber se é preciso ou não efetuar compras de um produto")


var quantidade_atual,quantidade_maxima,quantidade_minima,quantidade_media

quantidade_atual= parseFloat(prompt("Escreva a quantidade atual do estoque do produto:"));
quantidade_maxima=parseFloat(prompt("Escreva a quantidade maxima do estoque do produto:"));
quantidade_minima=parseFloat (prompt("Escreva a quantidade minima do estoque do produto:"));

quantidade_media= (quantidade_maxima + quantidade_minima )/ 2
if (quantidade_atual > quantidade_media ) {
alert("Não é preciso efetuar compra do produto");
}else{
alert("É preciso efetuar compra do produto ");
}