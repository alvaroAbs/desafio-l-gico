let saldoVitoria = 6000
let frase = "Alvaro seu nivel é de "

if (saldoVitoria <=1000){
    console.log( frase + "ferro")
} else if (saldoVitoria >= 1001 && saldoVitoria <= 2000){
    console.log(frase + "Bronze")
} else if (saldoVitoria >= 2001 && saldoVitoria <= 5000){
    console.log(frase + "Prata")
}else if (saldoVitoria >= 5001 && saldoVitoria <= 7000){
    console.log(frase + "Ouro")
}else if (saldoVitoria >= 7001 && saldoVitoria <= 8000){
    console.log(frase + "platina")
}else if (saldoVitoria >= 8001 && saldoVitoria <= 9000){
    console.log(frase + "Ascendente")
}else if (saldoVitoria >= 9001 && saldoVitoria <= 10000){
    console.log(frase + "Imortal")
} else {
    console.log(frase + "Radiante")
}


