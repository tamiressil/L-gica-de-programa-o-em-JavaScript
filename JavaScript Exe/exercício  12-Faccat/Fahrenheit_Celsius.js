
/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):
    C          F - 32
---------- = -----------
    5            9        
 */


    alert("Transformando a temperatura  fahrenheit para graus Celsius")

    var celsius, fahrenheit;
    
    var fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    celsius = (fahrenheit - 32) * (5 / 9);
    alert("A temperatura transformada em Graus Celsius é: " + celsius + "°C");