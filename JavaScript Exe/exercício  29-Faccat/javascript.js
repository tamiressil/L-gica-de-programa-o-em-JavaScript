/*Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores.*/



let primeiro_valor,segundo_valor, terceiro_valor,soma
primeiro_valor= parseInt (prompt("Digite o primeiro valor"));
segundo_valor= parseInt (prompt("Digite o segundo valor"));
terceiro_valor= parseInt (prompt("Digite o terceiro valor"));

if (primeiro_valor > terceiro_valor && (segundo_valor > terceiro_valor)) {
    soma = primeiro_valor + segundo_valor
    alert("A soma dos dois maiores valores é:"+ soma)
} else {
    if (primeiro_valor > segundo_valor && (terceiro_valor > segundo_valor)) {
        soma = primeiro_valor + terceiro_valor
        alert("A soma dos dois maiores valores é:" + soma)
    }else{
        soma = segundo_valor + terceiro_valor
        alert("A soma dos dois maiores valores é:" + soma)

    }
}











