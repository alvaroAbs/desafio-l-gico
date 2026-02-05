let vitorias = 100
let derrotas = 30
let saldoVitoria = calculo(vitorias,derrotas)
let nivel = ""
function calculo(vitorias,derrotas){
    return vitorias- derrotas
}


if (saldoVitoria <=10){
    nivel = "ferro"
} else if (saldoVitoria >= 11 && saldoVitoria <= 20){
    nivel = "bronze"
} else if (saldoVitoria >= 21 && saldoVitoria <= 50){
    nivel = "Prata"
}else if (saldoVitoria >= 51 && saldoVitoria <= 70){
    nivel = "Ouro"
}else if (saldoVitoria >= 71 && saldoVitoria <= 80){
    nivel = "Diamante"
}else if (saldoVitoria >= 81 && saldoVitoria <= 90){
        nivel = "Ascendente"
}else if (saldoVitoria >= 91 && saldoVitoria <= 100){
        nivel = "Imortal"
} else {
        nivel = "Radiante"
}

console.log ("O Heroi tem de saldo " + saldoVitoria + " está no nível de " + nivel)