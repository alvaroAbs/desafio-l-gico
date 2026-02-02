let nivelDeheroi = 6000
let frase = "Alvaro seu nivel é de "

if (nivelDeheroi <=1000){
    console.log( frase + "ferro")
} else if (nivelDeheroi >= 1001 && nivelDeheroi <= 2000){
    console.log(frase + "Bronze")
} else if (nivelDeheroi >= 2001 && nivelDeheroi <= 5000){
    console.log(frase + "Prata")
}else if (nivelDeheroi >= 5001 && nivelDeheroi <= 7000){
    console.log(frase + "Ouro")
}else if (nivelDeheroi >= 7001 && nivelDeheroi <= 8000){
    console.log(frase + "platina")
}else if (nivelDeheroi >= 8001 && nivelDeheroi <= 9000){
    console.log(frase + "Ascendente")
}else if (nivelDeheroi >= 9001 && nivelDeheroi <= 10000){
    console.log(frase + "Imortal")
} else {
    console.log(frase + "Radiante")
}
