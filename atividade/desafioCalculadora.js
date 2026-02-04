let saldoVitoria = calculo(100,30) 
let frase = "O heroi tem de saldo de "+ saldoVitoria + " esta no nivel "

function calculo(num1,num2){
    return num1- num2
}


if (saldoVitoria <=10){
    console.log( frase + "ferro")
} else if (saldoVitoria >= 11 && saldoVitoria <= 20){
    console.log(frase + "Bronze")
} else if (saldoVitoria >= 21 && saldoVitoria <= 50){
    console.log(frase + "Prata")
}else if (saldoVitoria >= 51 && saldoVitoria <= 70){
    console.log(frase + "Ouro")
}else if (saldoVitoria >= 71 && saldoVitoria <= 80){
    console.log(frase + "platina")
}else if (saldoVitoria >= 81 && saldoVitoria <= 90){
    console.log(frase + "Ascendente")
}else if (saldoVitoria >= 91 && saldoVitoria <= 100){
    console.log(frase + "Imortal")
} else {
    console.log(frase + "Radiante")
}