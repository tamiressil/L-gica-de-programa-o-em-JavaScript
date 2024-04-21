/*Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente.*/

alert ("Colocar três valores na ordem crescente ")

let primeiro_valor = parseFloat(prompt("Escreva o primeiro valor:"))
let segundo_valor= parseFloat(prompt("Escreva o segundo valor:"))
let terceiro_valor = parseFloat(prompt("Escreva o terceiro valor:"))

if (primeiro_valor > segundo_valor && segundo_valor > terceiro_valor) {
    alert( "A ordem crescente é:" + terceiro_valor+ segundo_valor +primeiro_valor)
} else {
    if (primeiro_valor > terceiro_valor && terceiro_valor > segundo_valor) {
        alert (" A ordem crescente é : " + segundo_valor + terceiro_valor + primeiro_valor )
    } else {
        if (segundo_valor > primeiro_valor && primeiro_valor > terceiro_valor) {
            alert( "A ordem crescente é :" + terceiro_valor + primeiro_valor + segundo_valor)
        } else {
            if (segundo_valor > terceiro_valor && terceiro_valor > primeiro_valor) {
                alert( "A ordem crescente é :"+ primeiro_valor + terceiro_valor + segundo_valor)
            } else {
                if (terceiro_valor>primeiro_valor && primeiro_valor>segundo_valor){
                    alert ( " A ordem crescente é :" + segundo_valor + primeiro_valor + terceiro_valor)
                }else{
                    alert(" A ordem crescente é :" + primeiro_valor + segundo_valor + terceiro_valor)
                }
            }
        }
    }
}