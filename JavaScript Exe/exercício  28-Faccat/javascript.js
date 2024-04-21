/*Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.*/


alert ("Definir qual dos três valores é maior");
var primeiro_valor, segundo_valor,terceiro_valor

 primeiro_valor= parseInt (prompt("Digite o primeiro valor "));
 segundo_valor= parseInt (prompt("Digite o segundo valor"));
 terceiro_valor=parseInt(prompt("Digite o terceito valor"));

 if (primeiro_valor > segundo_valor) {             
    if (primeiro_valor > terceiro_valor) {                                       
        alert("Primeiro valor é o maior: " + primeiro_valor);        
    }
}
if (segundo_valor > primeiro_valor) {                                         
    if (segundo_valor > terceiro_valor) {                                       
        alert("Segundo valor é o maior: " + segundo_valor);                                                        
    }
}
if (terceiro_valor > primeiro_valor) {                                           
    if (terceiro_valor > segundo_valor) {                                          
        alert("Terceiro valor é o maior: " + terceiro_valor);   
    }
}