/*Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte*/

alert("Fazer um exercício que leia a hora de início e a hora de término de um jogo de xadrez")

let HoraInicio = parseInt(prompt("Digite a hora de início da partida de xadrez (sem os minutos):"))
let  HoraFim = parseInt(prompt("Digite a hora que terminou a partida de xadrez (sem os minutos):"))

let duracao = HoraInicio - HoraFim

if (duracao<0){
    duracao = duracao+24
}

alert("A a partida de xadrez durou"+ duracao +"horas")


